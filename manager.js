const ManagerAgent = {
    name: "AGAGENT Manager",
    version: "1.0",

    agents: {
        video: "Video Production Agent",
        editing: "Video Editing Agent",
        content: "Content Creation Agent",
        automation: "Automation Agent"
    },

    processTask(task) {
        if (!task || typeof task !== "string") {
            return {
                success: false,
                message: "Tapşırıq daxil edilməyib."
            };
        }

        const text = task.toLowerCase();

        let agent = "content";

        if (text.includes("video yarat") || text.includes("video hazırla")) {
            agent = "video";
        } else if (text.includes("montaj") || text.includes("redaktə")) {
            agent = "editing";
        } else if (text.includes("avtomat") || text.includes("təkrarla")) {
            agent = "automation";
        }

        return {
            success: true,
            task: task,
            assignedAgent: this.agents[agent],
            status: "assigned"
        };
    }
};

if (typeof module !== "undefined") {
    module.exports = ManagerAgent;
}
