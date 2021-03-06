import {
  EntityFromIntegration,
  GraphClient,
  IntegrationExecutionContext,
  PersisterClient,
  RelationshipFromIntegration,
} from "@jupiterone/jupiter-managed-integration-sdk";

import ProviderClient from "./ProviderClient";

export const ACCOUNT_ENTITY_TYPE = "knowbe4_account";
export const ACCOUNT_ENTITY_CLASS = "Account";

export const USER_ENTITY_TYPE = "knowbe4_user";
export const USER_ENTITY_CLASS = "User";
export const ACCOUNT_USER_RELATIONSHIP_TYPE = "knowbe4_account_has_user";

export const GROUP_ENTITY_TYPE = "knowbe4_user_group";
export const GROUP_ENTITY_CLASS = "UserGroup";
export const ACCOUNT_GROUP_RELATIONSHIP_TYPE = "knowbe4_account_has_user_group";

export const USER_GROUP_RELATIONSHIP_TYPE = "knowbe4_user_group_membership";
export const USER_GROUP_RELATIONSHIP_CLASS = "HAS";

export const TRAINING_ENTITY_TYPE = "training_campaign";
export const TRAINING_ENTITY_CLASS = "Training";

export const TRAINING_MODULE_ENTITY_TYPE = "training_module";
export const TRAINING_MODULE_ENTITY_CLASS = ["Training", "Module"];

export const TRAINING_GROUP_RELATIONSHIP_TYPE = "training_assigned_user_group";
export const TRAINING_GROUP_RELATIONSHIP_CLASS = "ASSIGNED";

export const TRAINING_MODULE_RELATIONSHIP_TYPE = "training_has_module";
export const TRAINING_MODULE_RELATIONSHIP_CLASS = "HAS";

export const TRAINING_ENROLLMENT_RELATIONSHIP_TYPE =
  "training_module_assigned_user";
export const TRAINING_ENROLLMENT_RELATIONSHIP_CLASS = "ASSIGNED";

export const TRAINING_COMPLETION_RELATIONSHIP_TYPE =
  "user_completed_training_module";
export const TRAINING_COMPLETION_RELATIONSHIP_CLASS = "COMPLETED";

export interface IntegrationConfig {
  apiKey: string;
  site: string;
}

export interface AccountEntity extends EntityFromIntegration {
  name: string;
  type: string;
  domains: string[];
  admins: number[];
  subscriptionLevel: string;
  subscriptionEndDate: string;
  numberOfSeats: number;
  currentRiskScore: number;
}

export interface UserEntity extends EntityFromIntegration {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  admin?: boolean;
  permissions?: string[];
  employeeNumber: string | null;
  jobTitle: string | null;
  phishPronePercentage: number | null;
  phoneNumber: string | null;
  extension: string | null;
  mobilePhoneNumber: string | null;
  location: string | null;
  division: string | null;
  managerName: string | null;
  managerEmail: string | null;
  adiManageable: boolean | null;
  adiGuid: string | null;
  groups: number[];
  aliases: string[] | null;
  joinedOn: string | null;
  lastSignIn: string | null;
  status: string | null;
  organization: string | null;
  department: string | null;
  language: string | null;
  comment: string | null;
  employeeStartDate: string | null;
  archivedAt: string | null;
}

export interface GroupEntity extends EntityFromIntegration {
  id: number;
  groupId?: number;
  name: string;
  groupType: string;
  adiGuid: string | null;
  memberCount: number;
  status: string;
}

export interface TrainingEntity extends EntityFromIntegration {
  id: number;
  campaignId: number;
  name: string;
  groups: number[];
  status: string;
  modules: number[];
  content: number[];
  durationType: string;
  startDate: string;
  endDate: string | null;
  duration: string | null;
  autoEnroll: boolean;
  allowMultipleEnrollments: boolean;
}

export interface TrainingModuleEntity extends EntityFromIntegration {
  contentType: string;
  name: string;
  description?: string;
  type?: string;
  duration?: number;
  retired?: boolean;
  retirementDate?: string | null;
  publishDate?: string;
  publisher?: string;
  published?: boolean;
  purchaseDate?: string;
  policyUrl?: string | null;
  policyId?: number;
  storePurchaseId?: number;
  minimumTime?: number;
  defaultLanguage?: string;
}

export interface TrainingEnrollmentRelationship
  extends RelationshipFromIntegration {
  assignedOn?: number;
  startedOn?: number;
  completedOn?: number;
  status: string;
  timeSpent: number;
  policyAcknowledged: boolean;
}

export interface ExecutionContext extends IntegrationExecutionContext {
  graph: GraphClient;
  persister: PersisterClient;
  provider: ProviderClient;
}
