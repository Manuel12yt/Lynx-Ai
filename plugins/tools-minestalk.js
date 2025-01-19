import axios from 'axios';

const MinecraftStalk = async (username) => {
  try {
    const response = await axios.get(`https://playerdb.co/api/player/minecraft/${username}`);
    const data = response.data;

    return {
      username: data.data.player.username,
      id: data.data.player.id,
      raw_id: data.data.player.raw_id,
      avatar: data.data.player.avatar,
      skin_texture: data.data.player.skin_texture,
      name_history: data.data.player.name_history
    };
  } catch (error) {
    throw new Error("Jugador no encontrado");
  }
};

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return conn.reply(m.chat, `🚩 Ingresa un nombre de jugador de Minecraft\n\nEjemplo:\n> *${usedPrefix + command}* hann`, m);

  await m.react('🕓');
  try {
    const playerData = await MinecraftStalk(args[0]);
    
    let txt = '乂  M I N E C R A F T  -  S T A L K\n\n';
    txt += `  ✩   Username : ${playerData.username}\n`;
    txt += `  ✩   ID : ${playerData.id}\n`;
    txt += `  ✩   Raw ID : ${playerData.raw_id}\n`;
    txt += `  ✩   Avatar : ${playerData.avatar}\n`;
    txt += `  ✩   Skin Texture : ${playerData.skin_texture}\n`;
    txt += `  ✩   Name History : ${playerData.name_history.join(', ')}\n\n`;

    await conn.sendMessage(m.chat, { 
      text: txt,
      image: { url: playerData.avatar },
      caption: 'Aquí está la información del jugador Minecraft'
    }, { quoted: m });
    
    await m.react('✅');
  } catch (error) {
    await conn.reply(m.chat, error.message, m);
    await m.react('✖');
  }
};

handler.help = ['minestalk <nombrejugador>'];
handler.tags = ['tools'];
handler.command = ['minestalk', 'minecraftstalk'];
handler.register = true;

export default handler;