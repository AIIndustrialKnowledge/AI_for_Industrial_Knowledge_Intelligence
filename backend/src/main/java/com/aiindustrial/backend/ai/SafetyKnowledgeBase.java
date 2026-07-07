package com.aiindustrial.backend.ai;

import java.util.HashMap;
import java.util.Map;

public class SafetyKnowledgeBase {

    public static Map<String, String> getKnowledge() {

        Map<String, String> data = new HashMap<>();

        data.put("gas leak",
                "Gas leak detected. Evacuate immediately. Wear respirator PPE. Inform the safety officer.");

        data.put("fire",
                "Activate fire alarm. Use appropriate extinguisher. Evacuate the area.");

        data.put("chemical spill",
                "Wear chemical-resistant PPE. Isolate the spill. Use spill kit and notify EHS.");

        data.put("ppe",
                "Mandatory PPE: Helmet, Safety Shoes, Gloves, Goggles, Reflective Jacket.");

        data.put("electrical hazard",
                "Switch off power. Apply Lockout-Tagout. Never touch exposed conductors.");

        data.put("confined space",
                "Obtain confined space permit. Monitor oxygen level. Keep standby rescue team.");

        data.put("working at height",
                "Use safety harness. Inspect scaffolding. Wear helmet with chin strap.");

        data.put("boiler",
                "Monitor pressure continuously. Check safety valve. Report abnormal temperature.");

        data.put("machine failure",
                "Stop machine immediately. Inform maintenance. Do not restart until approved.");

        data.put("first aid",
                "Provide first aid and immediately contact the emergency response team.");

        return data;
    }

}