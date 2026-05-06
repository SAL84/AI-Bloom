import React from 'react';
import { NestedAIDiagram, LearningParadigmsDiagram, NeuralNetDiagram } from './m1-diagrams';
import { TokenizationDiagram, EmbeddingsDiagram, RAGFlowDiagram, FTvsPromptingDiagram, HallucinationMitigationDiagram } from './m2-diagrams';
import { AIStackDiagram, MCPDiagram, AgentTopologyDiagram, AutonomyLevelsDiagram, A2AvsMCPDiagram } from './m3-diagrams';
import { SOCArchDiagram, PromptInjectionDiagram, AgentAttackSurfaceDiagram, EDRBehavioralDiagram, EmailIdentityDiagram, AIAttackAccelerationDiagram } from './m4-diagrams';
import { GoogleStackDiagram, GoogleSecOpsDiagram, SecOpsAgentsDiagram, CompetitiveQuadrantDiagram, DiscoveryFunnelDiagram } from './m5-diagrams';

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  NestedAI: NestedAIDiagram,
  LearningParadigms: LearningParadigmsDiagram,
  NeuralNet: NeuralNetDiagram,
  Tokenization: TokenizationDiagram,
  Embeddings: EmbeddingsDiagram,
  RAGFlow: RAGFlowDiagram,
  FTvsPrompting: FTvsPromptingDiagram,
  HallucinationMitigation: HallucinationMitigationDiagram,
  AIStack: AIStackDiagram,
  MCP: MCPDiagram,
  AgentTopology: AgentTopologyDiagram,
  AutonomyLevels: AutonomyLevelsDiagram,
  A2AvsMCP: A2AvsMCPDiagram,
  SOCArch: SOCArchDiagram,
  EDRBehavioral: EDRBehavioralDiagram,
  EmailIdentity: EmailIdentityDiagram,
  AIAttackAcceleration: AIAttackAccelerationDiagram,
  PromptInjection: PromptInjectionDiagram,
  AgentAttackSurface: AgentAttackSurfaceDiagram,
  GoogleStack: GoogleStackDiagram,
  GoogleSecOps: GoogleSecOpsDiagram,
  SecOpsAgents: SecOpsAgentsDiagram,
  CompetitiveQuadrant: CompetitiveQuadrantDiagram,
  DiscoveryFunnel: DiscoveryFunnelDiagram,
};
