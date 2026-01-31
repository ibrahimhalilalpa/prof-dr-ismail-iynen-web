export default {
    name: 'about',
    title: 'Hakkımda',
    type: 'document',
    fields: [
        { name: 'title', title: 'Başlık', type: 'string' }, // Prof. Dr. İsmail İynen
        { name: 'subtitle', title: 'Alt Başlık', type: 'string' }, // KBB ve Baş Boyun Cerrahisi Uzmanı
        { name: 'bio', title: 'Biyografi', type: 'array', of: [{ type: 'block' }] }, // Zengin metin alanı
        { name: 'profileImage', title: 'Profil Fotoğrafı', type: 'image', options: { hotspot: true } },
        { name: 'cvFile', title: 'CV (PDF)', type: 'file' }, // O meşhur dosya buraya yüklenecek
    ]
}