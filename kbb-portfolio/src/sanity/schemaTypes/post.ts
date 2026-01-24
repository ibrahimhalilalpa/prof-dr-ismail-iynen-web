export default {
    name: 'post',
    title: 'Blog Yazıları',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Yazı Başlığı',
            type: 'string',
            description: 'Örn: Burun Estetiği Sonrası Dikkat Edilmesi Gerekenler',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Link (Slug)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Kapak Görseli',
            type: 'image',
            options: {
                hotspot: true, // Görselin önemli kısmını seçebilmek için
            },
        },
        {
            name: 'publishedAt',
            title: 'Yayın Tarihi',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'İçerik',
            type: 'array',
            of: [
                {
                    type: 'block', // Zengin metin (Rich Text) editörü
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                }
            ],
        },
    ],
}