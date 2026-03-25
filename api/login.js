// Archivo: api/login.js (ESTO VIVE EN EL SERVIDOR, NADIE LO VE)
export default function handler(req, res) {
    // Recibimos el código que el usuario escribió en el navegador
    const { codigo } = req.body;

    // Aquí está tu clave real. Como está en el servidor, F12 no sirve de nada.
    if (codigo === "250326") {
        // Respuesta correcta: le damos una "llave" temporal (token)
        res.status(200).json({ success: true, token: "acceso_concedido_pafas" });
    } else {
        // Respuesta incorrecta
        res.status(401).json({ success: false });
    }
}
