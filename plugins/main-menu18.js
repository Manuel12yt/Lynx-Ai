let handler = async (m, { isPrems, conn }) => {

let img = 'https://imgs.search.brave.com/Y3137Ak8ctIYjrNFn1yE2UPDs7R8TY_wbbAjgpRysg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MDg4NTUyOC92ZWN0/b3IvdW5kZXItMTgt/c2lnbi13YXJuaW5n/LXN5bWJvbC1vdmVy/LTE4LW9ubHktY2Vu/c29yZWQtZWlnaHRl/ZW4tYWdlLW9sZGVy/LWZvcmJpZGRlbi1h/ZHVsdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YXN0MlhD/eHIwd2ZIbTFYQkRX/TC11MnNmc25ma1p2/VW9QakVfaDUtWXNQ/RT0' 
let texto = `🌟 𝐌𝐄𝐍𝐔 🔞 𝐍𝐒𝐅𝐖 🌟

📌 *Categorías Principales:*
  ──────────────────
  🍑 **Genshin Impact**:
  • genshin

  👙 **Ropa y Temas de Verano**:
  • swimsuit
  • schoolswimsuit
  • bikini
  • topless
  • torncloth
  • pantypull
  • dress
  • shirtlift

  🐾 **Chicas y Fantasía**:
  • foxgirl
  • wolfgirl
  • bunnygirl
  • bunnyear
  • maid
  • idol
  • vampire
  • demon
  • hololive

  👓 **Accesorios y Detalles**:
  • sunglasses
  • glasses
  • headdress
  • headphone
  • chain
  • tie
  • weapon

  💕 **Cuerpo y Apariencia**:
  • breast
  • flatchest
  • erectnipples
  • nipples
  • spreadpussy
  • anusview

  🔥 **Acción y Escenas**:
  • sex
  • sex2
  • sex3
  • fingering
  • bondage
  • tears
  • seethrough
  • spreadlegs

  🎨 **Colores y Estilos**:
  • white
  • blonde
  • pinkhair
  • whitehair
  • greenhair

  🌳 **Otros Temas**:
  • tree
  • food
  • bed
  • beach
  • uniform
  • skirt
  • shorts
  • underwear
  • nobra
  • topless
  • fateseries
  • catgirl
──────────────────
⚠️ *Nota:* Usa estos comandos bajo tu responsabilidad.`
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['crow']
handler.command = ['menu18', 'menuhorny', 'menunsfw', 'menuhot'] 
export default handler;