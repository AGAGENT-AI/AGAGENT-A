
const ManagerAgent = {
    name: "AGAGENT Manager",
    version: "3.0",

    agents: {
        video: "Video Production Agent",
        editing: "Video Editing Agent",
        content: "Content Creation Agent",
        automation: "Automation Agent"
    },

    processTask(task) {
        if (!task || !task.trim()) {
            return {
                success: false,
                message: "Zəhmət olmasa tapşırıq yaz."
            };
        }

        const text = task.toLowerCase()
            .replace(/ı/g, "i")
            .replace(/ə/g, "e")
            .replace(/ş/g, "s")
            .replace(/ç/g, "c")
            .replace(/ğ/g, "g")
            .replace(/ö/g, "o")
            .replace(/ü/g, "u");

        let agent = "content";

        if (
            text.includes("montaj") ||
            text.includes("redakte") ||
            text.includes("edit")
        ) {
            agent = "editing";
        } else if (
            text.includes("avtomat") ||
            text.includes("tekrarla")
        ) {
            agent = "automation";
        } else if (
            text.includes("basliq") ||
            text.includes("tesvir") ||
            text.includes("hashtag") ||
            text.includes("paylasim") ||
            text.includes("kontent") ||
            text.includes("caption") ||
            text.includes("description")
        ) {
            agent = "content";
        } else if (
            text.includes("video") ||
            text.includes("film") ||
            text.includes("rolik")
        ) {
            agent = "video";
        }

        return {
            success: true,
            task: task,
            assignedAgent: this.agents[agent],
            status: "assigned"
        };
    }
};

if (typeof window !== "undefined") {
    window.ManagerAgent = ManagerAgent;
}

if (typeof module !== "undefined") {
    module.exports = ManagerAgent;
}
