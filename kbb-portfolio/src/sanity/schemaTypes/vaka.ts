// src/sanity/schemaTypes/vaka.ts
export default {
    name: 'vaka',
    title: 'Vaka Analizleri',
    type: 'document',
    fields: [
        {
            name: 'baslik',
            title: 'Vaka Başlığı',
            type: 'string',
            description: 'Örn: Burun Estetiği - Vaka 1'
        },
        {
            name: 'kategori',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Rinoplasti (Burun Estetiği)', value: 'rinoplasti' },
                    { title: 'Revizyon Rinoplasti', value: 'revizyon' },
                    { title: 'Septoplasti', value: 'septoplasti' },
                    { title: 'Sinüzit Cerrahisi', value: 'sinuzit' },
                    { title: 'Kepçe Kulak Ameliyatı', value: 'kepce-kulak' },
                ],
                layout: 'dropdown' // İstersen 'radio' yaparak buton gibi de dizebilirsin
            }
        },
        {
            name: 'oncesi',
            title: 'Öncesi Fotoğrafı',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'sonrasi',
            title: 'Sonrası Fotoğrafı',
            type: 'image',
            options: { hotspot: true }
        },
    ],
}