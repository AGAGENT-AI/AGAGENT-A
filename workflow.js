
const AGAGENTWorkflow = {
    name: "AGAGENT AI Workflow Manager",
    version: "1.0",

    runFullWorkflow(topic) {
        if (!topic || !topic.trim()) {
            return {
                success: false,
                message: "Video mövzusu daxil edilməyib."
            };
        }

        const video = VideoProductionAgent.createPlan(topic);
        const editing = VideoEditingAgent.createEditingPlan(topic);
        const content = ContentCreationAgent.createContent(topic);
        const automation = AutomationAgent.createAutomationPlan(topic);

        return {
            success: true,
            topic: topic,

            videoPlan: video,
            editingPlan: editing,
            contentPlan: content,
            automationPlan: automation,

            status: "workflow_completed"
        };
    }
};

if (typeof window !== "undefined") {
    window.AGAGENTWorkflow = AGAGENTWorkflow;
}

if (typeof module !== "undefined") {
    module.exports = AGAGENTWorkflow;
}
