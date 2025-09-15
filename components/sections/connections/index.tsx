"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Handle,
  Position,
} from "react-flow-renderer";
import dagre from "dagre";

// Module types for the landing page
const MODULE_TYPES = {
  SECOND_BRAIN: "second_brain",
  DASHBOARD: "dashboard",
  TASKS: "tasks",
  PROJECTS: "projects",
  GOALS: "goals",
  HABITS: "habits",
  NOTES: "notes",
  RESOURCES: "resources",
  PEOPLE: "people",
  FINANCE: "finance",
  JOURNAL: "journal",
  MOOD_TRACKER: "mood_tracker",
  PARA_PROJECTS: "para_projects",
  PARA_AREAS: "para_areas",
  PARA_RESOURCES: "para_resources",
  PARA_ARCHIVE: "para_archive",
} as const;

const nodeWidth = 180;
const nodeHeight = 50;

const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = "LR"
) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });

  return { nodes: layoutedNodes, edges };
};

// Custom node component for consistent sizing and handle positioning
const CustomNode = ({ data, id }: { data: any; id: string }) => {
  const getNodeColor = (nodeId: string) => {
    const colors: { [key: string]: string } = {
      [MODULE_TYPES.SECOND_BRAIN]: "#6366F1", // Indigo
      [MODULE_TYPES.DASHBOARD]: "#3B82F6", // Blue
      [MODULE_TYPES.TASKS]: "#10B981", // Green
      [MODULE_TYPES.PROJECTS]: "#F59E0B", // Orange
      [MODULE_TYPES.GOALS]: "#EF4444", // Red
      [MODULE_TYPES.HABITS]: "#8B5CF6", // Purple
      [MODULE_TYPES.NOTES]: "#8B5CF6", // Purple
      [MODULE_TYPES.RESOURCES]: "#7C3AED", // Deep purple
      [MODULE_TYPES.PEOPLE]: "#EC4899", // Pink
      [MODULE_TYPES.FINANCE]: "#059669", // Emerald
      [MODULE_TYPES.JOURNAL]: "#F59E0B", // Orange
      [MODULE_TYPES.MOOD_TRACKER]: "#EC4899", // Pink
      [MODULE_TYPES.PARA_PROJECTS]: "#EF4444", // Red
      [MODULE_TYPES.PARA_AREAS]: "#10B981", // Green
      [MODULE_TYPES.PARA_RESOURCES]: "#8B5CF6", // Purple
      [MODULE_TYPES.PARA_ARCHIVE]: "#6B7280", // Gray
    };
    return colors[nodeId] || "#64748B"; // Default slate
  };

  const isCentralNode = id === MODULE_TYPES.SECOND_BRAIN;

  return (
    <div
      className={`min-w-[120px] rounded-lg border px-4 py-3 text-center text-sm font-medium text-white shadow-sm ${
        isCentralNode ? "scale-110 font-bold" : ""
      }`}
      style={{
        backgroundColor: getNodeColor(id),
        borderColor: getNodeColor(id),
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="h-3 w-3 !border-2 !border-white !bg-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="h-3 w-3 !border-2 !border-white !bg-white"
      />
      <Handle
        type="target"
        position={Position.Top}
        className="h-3 w-3 !border-2 !border-white !bg-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="h-3 w-3 !border-2 !border-white !bg-white"
      />
      {data.label}
    </div>
  );
};

// Register the custom node type
const nodeTypes = {
  custom: CustomNode,
};

// Organized nodes with logical hierarchy and better positioning
const nodes: Node[] = [
  // Central hub - Second Brain
  {
    id: MODULE_TYPES.SECOND_BRAIN,
    type: "custom",
    data: { label: "Second Brain" },
    position: { x: 600, y: 400 }, // Center of the diagram
  },

  // Top tier - Overview and Control
  {
    id: MODULE_TYPES.DASHBOARD,
    type: "custom",
    data: { label: "Dashboard" },
    position: { x: 600, y: 200 }, // Directly above Second Brain
  },

  // Left branch - Action-oriented modules
  {
    id: MODULE_TYPES.TASKS,
    type: "custom",
    data: { label: "Tasks" },
    position: { x: 200, y: 300 },
  },
  {
    id: MODULE_TYPES.PROJECTS,
    type: "custom",
    data: { label: "Projects" },
    position: { x: 350, y: 300 },
  },
  {
    id: MODULE_TYPES.GOALS,
    type: "custom",
    data: { label: "Goals" },
    position: { x: 275, y: 180 }, // Above tasks/projects
  },
  {
    id: MODULE_TYPES.HABITS,
    type: "custom",
    data: { label: "Habits" },
    position: { x: 200, y: 420 }, // Below tasks
  },

  // Right branch - Knowledge and Resources
  {
    id: MODULE_TYPES.NOTES,
    type: "custom",
    data: { label: "Notes" },
    position: { x: 850, y: 300 },
  },
  {
    id: MODULE_TYPES.RESOURCES,
    type: "custom",
    data: { label: "Resources" },
    position: { x: 1000, y: 300 },
  },

  // Bottom branch - Personal tracking
  {
    id: MODULE_TYPES.JOURNAL,
    type: "custom",
    data: { label: "Journal" },
    position: { x: 450, y: 550 },
  },
  {
    id: MODULE_TYPES.MOOD_TRACKER,
    type: "custom",
    data: { label: "Mood Tracker" },
    position: { x: 600, y: 550 },
  },
  {
    id: MODULE_TYPES.PEOPLE,
    type: "custom",
    data: { label: "People" },
    position: { x: 750, y: 550 },
  },

  // Top right - Financial and specialized
  {
    id: MODULE_TYPES.FINANCE,
    type: "custom",
    data: { label: "Finance" },
    position: { x: 850, y: 180 },
  },

  // PARA Method cluster - Top right area
  {
    id: MODULE_TYPES.PARA_PROJECTS,
    type: "custom",
    data: { label: "PARA Projects" },
    position: { x: 450, y: 100 },
  },
  {
    id: MODULE_TYPES.PARA_AREAS,
    type: "custom",
    data: { label: "PARA Areas" },
    position: { x: 750, y: 100 },
  },
  {
    id: MODULE_TYPES.PARA_RESOURCES,
    type: "custom",
    data: { label: "PARA Resources" },
    position: { x: 1000, y: 180 },
  },
  {
    id: MODULE_TYPES.PARA_ARCHIVE,
    type: "custom",
    data: { label: "PARA Archive" },
    position: { x: 1150, y: 300 },
  },
];

// Clean, organized edges with minimal crossings
const edges: Edge[] = [
  // PRIMARY: Second Brain as central hub (only essential connections)
  {
    id: "brain-dashboard",
    source: MODULE_TYPES.SECOND_BRAIN,
    target: MODULE_TYPES.DASHBOARD,
    animated: true,
    style: { stroke: "#6366F1", strokeWidth: 4 },
  },
  {
    id: "brain-projects",
    source: MODULE_TYPES.SECOND_BRAIN,
    target: MODULE_TYPES.PROJECTS,
    animated: true,
    style: { stroke: "#6366F1", strokeWidth: 3 },
  },
  {
    id: "brain-notes",
    source: MODULE_TYPES.SECOND_BRAIN,
    target: MODULE_TYPES.NOTES,
    animated: true,
    style: { stroke: "#6366F1", strokeWidth: 3 },
  },
  {
    id: "brain-journal",
    source: MODULE_TYPES.SECOND_BRAIN,
    target: MODULE_TYPES.JOURNAL,
    animated: true,
    style: { stroke: "#6366F1", strokeWidth: 3 },
  },

  // LEFT SIDE: Action hierarchy (clean vertical flow)
  {
    id: "goals-projects",
    source: MODULE_TYPES.GOALS,
    target: MODULE_TYPES.PROJECTS,
    animated: true,
    style: { stroke: "#EF4444", strokeWidth: 3 },
  },
  {
    id: "projects-tasks",
    source: MODULE_TYPES.PROJECTS,
    target: MODULE_TYPES.TASKS,
    animated: true,
    style: { stroke: "#F59E0B", strokeWidth: 3 },
  },
  {
    id: "habits-tasks",
    source: MODULE_TYPES.HABITS,
    target: MODULE_TYPES.TASKS,
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 2 },
  },

  // RIGHT SIDE: Knowledge flow (clean vertical)
  {
    id: "finance-notes",
    source: MODULE_TYPES.FINANCE,
    target: MODULE_TYPES.NOTES,
    animated: true,
    style: { stroke: "#059669", strokeWidth: 2 },
  },
  {
    id: "notes-resources",
    source: MODULE_TYPES.NOTES,
    target: MODULE_TYPES.RESOURCES,
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 3 },
  },

  // BOTTOM: Personal tracking (horizontal flow)
  {
    id: "journal-mood",
    source: MODULE_TYPES.JOURNAL,
    target: MODULE_TYPES.MOOD_TRACKER,
    animated: true,
    style: { stroke: "#F59E0B", strokeWidth: 3 },
  },
  {
    id: "mood-people",
    source: MODULE_TYPES.MOOD_TRACKER,
    target: MODULE_TYPES.PEOPLE,
    animated: true,
    style: { stroke: "#EC4899", strokeWidth: 2 },
  },

  // TOP: PARA methodology (horizontal flow)
  {
    id: "para-projects-areas",
    source: MODULE_TYPES.PARA_PROJECTS,
    target: MODULE_TYPES.PARA_AREAS,
    animated: true,
    style: { stroke: "#EF4444", strokeWidth: 2 },
  },
  {
    id: "para-areas-resources",
    source: MODULE_TYPES.PARA_AREAS,
    target: MODULE_TYPES.PARA_RESOURCES,
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 2 },
  },
  {
    id: "para-resources-archive",
    source: MODULE_TYPES.PARA_RESOURCES,
    target: MODULE_TYPES.PARA_ARCHIVE,
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 2 },
  },

  // STRATEGIC CONNECTIONS: Key integrations (dashed to show they're different)
  {
    id: "para-projects-goals",
    source: MODULE_TYPES.PARA_PROJECTS,
    target: MODULE_TYPES.GOALS,
    animated: true,
    style: { stroke: "#EF4444", strokeWidth: 2, strokeDasharray: "8,4" },
  },
  {
    id: "dashboard-para-areas",
    source: MODULE_TYPES.DASHBOARD,
    target: MODULE_TYPES.PARA_AREAS,
    animated: true,
    style: { stroke: "#3B82F6", strokeWidth: 2, strokeDasharray: "8,4" },
  },
  {
    id: "resources-para-archive",
    source: MODULE_TYPES.RESOURCES,
    target: MODULE_TYPES.PARA_ARCHIVE,
    animated: true,
    style: { stroke: "#7C3AED", strokeWidth: 1, strokeDasharray: "4,4" },
  },
  {
    id: "people-habits",
    source: MODULE_TYPES.PEOPLE,
    target: MODULE_TYPES.HABITS,
    animated: true,
    style: { stroke: "#EC4899", strokeWidth: 1, strokeDasharray: "4,4" },
  },
];

export default function ConnectionsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Knowledge Ecosystem
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Visualize how your entire second brain connects - from tasks and
            projects to PARA methodology and personal tracking. Everything works
            together in one seamless, intelligent system.
          </p>
        </div>

        <Card className="bg-card/50 border-0 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="bg-background/50 h-[700px] rounded-lg border">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.4}
                maxZoom={1.2}
              >
                <Background color="#e2e8f0" gap={20} size={1} />
                <MiniMap
                  nodeColor={(node) => {
                    const colors: { [key: string]: string } = {
                      [MODULE_TYPES.SECOND_BRAIN]: "#6366F1",
                      [MODULE_TYPES.DASHBOARD]: "#3B82F6",
                      [MODULE_TYPES.TASKS]: "#10B981",
                      [MODULE_TYPES.PROJECTS]: "#F59E0B",
                      [MODULE_TYPES.GOALS]: "#EF4444",
                      [MODULE_TYPES.HABITS]: "#8B5CF6",
                      [MODULE_TYPES.NOTES]: "#8B5CF6",
                      [MODULE_TYPES.RESOURCES]: "#7C3AED",
                      [MODULE_TYPES.PEOPLE]: "#EC4899",
                      [MODULE_TYPES.FINANCE]: "#059669",
                      [MODULE_TYPES.JOURNAL]: "#F59E0B",
                      [MODULE_TYPES.MOOD_TRACKER]: "#EC4899",
                      [MODULE_TYPES.PARA_PROJECTS]: "#EF4444",
                      [MODULE_TYPES.PARA_AREAS]: "#10B981",
                      [MODULE_TYPES.PARA_RESOURCES]: "#8B5CF6",
                      [MODULE_TYPES.PARA_ARCHIVE]: "#6B7280",
                    };
                    return colors[node.id] || "#64748B";
                  }}
                  className="!bg-background/80"
                />
                <Controls className="!bg-background/80" />
              </ReactFlow>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#6366F1]"></div>
                <span className="text-sm font-bold">Second Brain Hub</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#3B82F6]"></div>
                <span className="text-sm">Dashboard Control</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#EF4444]"></div>
                <span className="text-sm">Goals & PARA</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#F59E0B]"></div>
                <span className="text-sm">Projects & Journal</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#10B981]"></div>
                <span className="text-sm">Tasks & Areas</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#8B5CF6]"></div>
                <span className="text-sm">Notes & Habits</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#7C3AED]"></div>
                <span className="text-sm">Resources</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#EC4899]"></div>
                <span className="text-sm">People & Mood</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#059669]"></div>
                <span className="text-sm">Finance</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-[#6B7280]"></div>
                <span className="text-sm">Archive</span>
              </div>
            </div>

            <div className="bg-muted/50 mt-6 rounded-lg p-6">
              <h3 className="mb-4 text-lg font-semibold">
                System Architecture:
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-[#EF4444]">
                    Action Layer (Left)
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Goals → Projects → Tasks hierarchy</li>
                    <li>• Habits support goal achievement</li>
                    <li>• Clear action-oriented workflow</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-[#8B5CF6]">
                    Knowledge Layer (Right)
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Notes feed into resources</li>
                    <li>• Resources inform goals and projects</li>
                    <li>• PARA methodology integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-[#F59E0B]">
                    Personal Layer (Bottom)
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Journal connects to mood tracking</li>
                    <li>• People relationships linked to projects</li>
                    <li>• Reflection supports habit formation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-[#3B82F6]">
                    Control Layer (Top)
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Dashboard provides system overview</li>
                    <li>• PARA method organizes information</li>
                    <li>• Finance tracking integrated</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
