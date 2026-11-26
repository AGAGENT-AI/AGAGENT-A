
const VideoProductionAgent = {
    name: "AGAGENT Video Production Agent",
    version: "2.0",

    createPlan(topic, platform = "YouTube") {
        if (!topic || !topic.trim()) {
            return {
                success: false,
                message: "Video mövzusu daxil edilməyib."
            };
        }

        const cleanTopic = topic.trim();

        return {
            success: true,
            agent: this.name,
            topic: cleanTopic,
            platform,

            title: `${cleanTopic} — Bilməli olduğunuz hər şey!`,

            structure: [
                "Güclü giriş və diqqətçəkən başlıq",
                "Mövzunun ətraflı təqdimatı",
                "Əsas məlumatlar və maraqlı faktlar",
                "Nümunələr və praktiki izahlar",
                "Nəticə və izləyiciyə çağırış"
            ],

            script: [
                `GİRİŞ: Salam! Bu gün ${cleanTopic} haqqında danışacağıq.`,
                `TƏQDİMAT: Gəlin ${cleanTopic} mövzusunu birlikdə araşdıraq.`,
                "ƏSAS HİSSƏ: Mövzunun vacib məqamlarını, nümunələrini və faydalarını izah edirik.",
                "NƏTİCƏ: Ümid edirik ki, bu video sizin üçün faydalı oldu. Kanalımıza abunə olmağı unutmayın!"
            ],

            deliverables: [
                "Tam video ssenarisi",
                "Səhnə planı",
                "Diktor mətni",
                "Altyazı mətni",
                "Video başlığı"
            ],

            status: "production_plan_created"
        };
    }
};

if (typeof window !== "undefined") {
    window.VideoProductionAgent = VideoProductionAgent;
}

if (typeof module !== "undefined") {
    module.exports = VideoProductionAgent;
}
