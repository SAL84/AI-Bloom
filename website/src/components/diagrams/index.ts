import React from 'react';
import { AIBasicsOverviewDiagram, NestedAIDiagram, BaseRateDiagram, LearningParadigmsDiagram, LearningParadigmsGenericDiagram, NeuralNetDiagram, CapabilityTiersDiagram, AIPipelineDiagram } from './m1-diagrams';
import { TokenizationDiagram, EmbeddingsDiagram, RAGFlowDiagram, FTvsPromptingDiagram, HallucinationMitigationDiagram } from './m2-diagrams';
import { AIStackDiagram, MCPDiagram, AgentTopologyDiagram, AutonomyLevelsDiagram, A2AvsMCPDiagram, SkillsPluginsDiagram, SubagentsDiagram, HooksDiagram, PhishingTriageDiagram } from './m3-diagrams';
import { SOCArchDiagram, PromptInjectionDiagram, AgentAttackSurfaceDiagram, EDRBehavioralDiagram, EmailIdentityDiagram, AIAttackAccelerationDiagram, SOAREvolutionDiagram, SIEMXDRDiagram } from './m4-diagrams';
import { GoogleStackDiagram, GoogleSecOpsDiagram, SecOpsAgentsDiagram, CompetitiveQuadrantDiagram, DiscoveryFunnelDiagram } from './m5-diagrams';
import { SOCCopilotsDiagram, ThreatIntelHuntingDiagram, DataGovernanceDiagram, DefenseReframingDiagram } from './soc-ops-diagrams';
import { GoogleAgentInfraDiagram, GTISCCWizDiagram, AgenticDefenseDiagram, TalkTracksDiagram } from './google-product-diagrams';
import { DemoFrameworkDiagram, ObjectionHandlingDiagram, ROIComplianceDiagram, CustomerArchetypesDiagram, SEPromptingPlaybookDiagram } from './sales-diagrams';

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  AIBasicsOverview: AIBasicsOverviewDiagram,
  NestedAI: NestedAIDiagram,
  BaseRate: BaseRateDiagram,
  LearningParadigms: LearningParadigmsDiagram,
  LearningParadigmsGeneric: LearningParadigmsGenericDiagram,
  NeuralNet: NeuralNetDiagram,
  CapabilityTiers: CapabilityTiersDiagram,
  AIPipeline: AIPipelineDiagram,
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
  SkillsPlugins: SkillsPluginsDiagram,
  Subagents: SubagentsDiagram,
  Hooks: HooksDiagram,
  PhishingTriage: PhishingTriageDiagram,
  SOCArch: SOCArchDiagram,
  EDRBehavioral: EDRBehavioralDiagram,
  EmailIdentity: EmailIdentityDiagram,
  AIAttackAcceleration: AIAttackAccelerationDiagram,
  PromptInjection: PromptInjectionDiagram,
  AgentAttackSurface: AgentAttackSurfaceDiagram,
  SOAREvolution: SOAREvolutionDiagram,
  SIEMXDRArch: SIEMXDRDiagram,
  SOCCopilots: SOCCopilotsDiagram,
  ThreatIntelHunting: ThreatIntelHuntingDiagram,
  DataGovernance: DataGovernanceDiagram,
  DefenseReframing: DefenseReframingDiagram,
  GoogleStack: GoogleStackDiagram,
  GoogleSecOps: GoogleSecOpsDiagram,
  SecOpsAgents: SecOpsAgentsDiagram,
  CompetitiveQuadrant: CompetitiveQuadrantDiagram,
  DiscoveryFunnel: DiscoveryFunnelDiagram,
  GoogleAgentInfra: GoogleAgentInfraDiagram,
  GTISCCWiz: GTISCCWizDiagram,
  AgenticDefense: AgenticDefenseDiagram,
  TalkTracks: TalkTracksDiagram,
  DemoFramework: DemoFrameworkDiagram,
  ObjectionHandling: ObjectionHandlingDiagram,
  ROICompliance: ROIComplianceDiagram,
  CustomerArchetypes: CustomerArchetypesDiagram,
  SEPromptingPlaybook: SEPromptingPlaybookDiagram,
};
