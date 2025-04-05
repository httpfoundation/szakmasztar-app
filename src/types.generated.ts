/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  color: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  highlighted: Scalars['Boolean']['output'];
  homeHighlighted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  lead: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  position: Scalars['Float']['output'];
  publishedAt?: Maybe<Scalars['Timestamp']['output']>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type Category = {
  __typename?: 'Category';
  article?: Maybe<Article>;
  children: Array<Category>;
  color: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  disableCreate?: Maybe<Scalars['Boolean']['output']>;
  disableDelete?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  items: Array<CategoryItem>;
  maxDepth?: Maybe<Scalars['Int']['output']>;
  metadata: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  slugFieldDisabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CategoryItem = Article | Chat | File;

export type Certification = {
  __typename?: 'Certification';
  certificationNumber: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  multiplier: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  content: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type Competition = {
  __typename?: 'Competition';
  article: Article;
  competitors: Array<Competitor>;
  endDate: Scalars['String']['output'];
  experts: Array<Member>;
  id: Scalars['ID']['output'];
  isCurrent: Scalars['Boolean']['output'];
  isJunior: Scalars['Boolean']['output'];
  isNext: Scalars['Boolean']['output'];
  members: Array<Member>;
  name: Scalars['String']['output'];
  nationalCompetitionRegistrationCount?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  sponsors: Array<Sponsor>;
  startingDate: Scalars['String']['output'];
};

export type CompetitionRegistration = {
  __typename?: 'CompetitionRegistration';
  birthDate: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  nationalCompetition: NationalCompetition;
  occupation?: Maybe<Scalars['String']['output']>;
  occupationCity?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  region: Scalars['String']['output'];
  skill: Skill;
  source: Scalars['String']['output'];
};

export type CompetitionRegistrationInput = {
  birthDate: Scalars['String']['input'];
  city: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  nationalCompetitionId: Scalars['Float']['input'];
  occupation?: InputMaybe<Scalars['String']['input']>;
  occupationCity?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  region: Scalars['String']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
};

export type Competitor = {
  __typename?: 'Competitor';
  bio: Scalars['String']['output'];
  competitions: Array<Competition>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  lastName: Scalars['String']['output'];
  results: Array<Result>;
  roleName: Scalars['String']['output'];
  schoolName: Scalars['String']['output'];
  skill: Skill;
  skillId: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  workplace?: Maybe<Scalars['String']['output']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  jobTitle: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CreateArticleInput = {
  categoryId: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  image?: InputMaybe<FileInput>;
  lead: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  articleId?: InputMaybe<Scalars['String']['input']>;
  color: Scalars['String']['input'];
  image?: InputMaybe<FileInput>;
  name: Scalars['String']['input'];
  parentId: Scalars['String']['input'];
};

export type CreateChatInput = {
  categoryId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateCompetitionInput = {
  article: CreateArticleInput;
  endDate: Scalars['String']['input'];
  isCurrent: Scalars['Boolean']['input'];
  isNext: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  startingDate: Scalars['String']['input'];
};

export type CreateContactInput = {
  email: Scalars['String']['input'];
  image?: InputMaybe<FileInput>;
  jobTitle: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateFormInput = {
  copyFrom?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateMemberInput = {
  bio: Scalars['String']['input'];
  competitionIds: Array<MemberCompetitionPivotInput>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  roleName: MemberRole;
  slug: Scalars['String']['input'];
  workplace: Scalars['String']['input'];
};

export type CreateNationalCompetitionInput = {
  ageLimit: Scalars['Float']['input'];
  article: CreateArticleInput;
  competitionEndsAt: Scalars['Timestamp']['input'];
  competitionId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationEmails: Array<Scalars['String']['input']>;
  registrationEndsAt: Scalars['Timestamp']['input'];
  skillId: Scalars['String']['input'];
};

export type CreateSkillCategoryInput = {
  icon?: InputMaybe<FileInput>;
  name: Scalars['String']['input'];
};

export type CreateSponsorInput = {
  article?: InputMaybe<CreateArticleInput>;
  competitions?: Array<SponsorCompetitionPivotInput>;
  homepageUrl?: InputMaybe<Scalars['String']['input']>;
  image: FileInput;
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  admin: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DetailedForm = {
  __typename?: 'DetailedForm';
  _count: FormCount;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  formFieldGroups: Array<FormFieldGroup>;
  formFields: Array<FormField>;
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  name: Scalars['String']['output'];
  notificationArticle?: Maybe<Article>;
  notificationEmailsEnabled: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type EntitySyncResult = {
  __typename?: 'EntitySyncResult';
  count: Scalars['Float']['output'];
  success: Scalars['Boolean']['output'];
};

export type File = {
  __typename?: 'File';
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  srcset?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Timestamp']['output'];
  url: Scalars['String']['output'];
};

export type FileInput = {
  id: Scalars['String']['input'];
};

export type Form = {
  __typename?: 'Form';
  _count: FormCount;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  formFields: Array<FormField>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  notificationEmailsEnabled: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type FormCount = {
  __typename?: 'FormCount';
  formEntries: Scalars['Float']['output'];
};

export type FormEntriesResponse = {
  __typename?: 'FormEntriesResponse';
  formEntries: Array<FormEntry>;
  formFields: Array<FormField>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type FormEntry = {
  __typename?: 'FormEntry';
  formEntryFieldValues: Array<FormEntryFieldValue>;
  id: Scalars['ID']['output'];
};

export type FormEntryFieldValue = {
  __typename?: 'FormEntryFieldValue';
  formEntryId: Scalars['String']['output'];
  formFieldId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type FormField = {
  __typename?: 'FormField';
  createdAt: Scalars['Timestamp']['output'];
  displayCondition?: Maybe<FormFieldDisplayCondition>;
  formFieldGroupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<FormFieldOptions>;
  position: Scalars['Float']['output'];
  type: FormFieldType;
  updatedAt: Scalars['Timestamp']['output'];
  validations: FormFieldValidations;
};

export type FormFieldDisplayCondition = {
  __typename?: 'FormFieldDisplayCondition';
  comparisonType: Scalars['String']['output'];
  comparisonValue: Scalars['String']['output'];
  targetFieldId: Scalars['ID']['output'];
};

export type FormFieldGroup = {
  __typename?: 'FormFieldGroup';
  createdAt: Scalars['Timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayCondition?: Maybe<FormFieldDisplayCondition>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Float']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type FormFieldOptions = {
  __typename?: 'FormFieldOptions';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum FormFieldType {
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Multiselect = 'MULTISELECT',
  Number = 'NUMBER',
  Radio = 'RADIO',
  Select = 'SELECT',
  Text = 'TEXT'
}

export type FormFieldValidations = {
  __typename?: 'FormFieldValidations';
  required: Scalars['Boolean']['output'];
};

export type Gallery = {
  __typename?: 'Gallery';
  id: Scalars['ID']['output'];
  images: Array<GalleryImage>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  path: Scalars['String']['output'];
  srcset: Array<Srcset>;
};

export type I18n = {
  __typename?: 'I18n';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type Image = {
  __typename?: 'Image';
  competitionId: Scalars['String']['output'];
  file?: Maybe<File>;
  isSelected: Scalars['Boolean']['output'];
};

export type InputFormFieldDisplayCondition = {
  comparisonType: Scalars['String']['input'];
  comparisonValue: Scalars['String']['input'];
  targetFieldId: Scalars['ID']['input'];
};

export type InputFormFieldOptions = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type InputFormFieldValidations = {
  required: Scalars['Boolean']['input'];
};

export type IsziirConfig = {
  __typename?: 'IsziirConfig';
  baseUrl: Scalars['String']['output'];
  clientId: Scalars['String']['output'];
};

export type Kamara = {
  __typename?: 'Kamara';
  cim: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  kod: Scalars['String']['output'];
  megyeId?: Maybe<Scalars['String']['output']>;
  nev: Scalars['String']['output'];
  rovidNev: Scalars['String']['output'];
  telefonszamok: Array<Scalars['String']['output']>;
};

export type Kepzohely = {
  __typename?: 'Kepzohely';
  geszNev: Scalars['String']['output'];
  khCim: Scalars['String']['output'];
  khNev: Scalars['String']['output'];
  position?: Maybe<Position>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String']['output'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Medal = {
  __typename?: 'Medal';
  id: Scalars['ID']['output'];
  nameEn: Scalars['String']['output'];
  nameHu: Scalars['String']['output'];
};

export type Member = {
  __typename?: 'Member';
  bio: Scalars['String']['output'];
  competitions: Array<Competition>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  lastName: Scalars['String']['output'];
  position: Scalars['Float']['output'];
  roleName: MemberRole;
  schoolName: Scalars['String']['output'];
  skill?: Maybe<Skill>;
  skillId?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  workplace: Scalars['String']['output'];
};

export type MemberCompetitionPivotInput = {
  competitionId: Scalars['String']['input'];
  imageFileId: Scalars['String']['input'];
};

export enum MemberRole {
  Expert = 'EXPERT',
  OfficialDelegate = 'OFFICIAL_DELEGATE',
  TeamLeader = 'TEAM_LEADER',
  TechnicalDelegate = 'TECHNICAL_DELEGATE',
  TechnicalDelegateAssistant = 'TECHNICAL_DELEGATE_ASSISTANT'
}

export type MenuItem = {
  __typename?: 'MenuItem';
  category: Category;
  contentType: MenuItemContentType;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  site: Site;
  slug: Scalars['String']['output'];
};

export enum MenuItemContentType {
  Article = 'ARTICLE',
  Calendar = 'CALENDAR',
  Carousel = 'CAROUSEL',
  Chat = 'CHAT',
  Custom = 'CUSTOM',
  Document = 'DOCUMENT',
  Legislation = 'LEGISLATION',
  Page = 'PAGE',
  Publication = 'PUBLICATION',
  Qna = 'QNA',
  SzakmasztarEvent = 'SZAKMASZTAR_EVENT',
  SzakmasztarTask = 'SZAKMASZTAR_TASK',
  Translation = 'TRANSLATION',
  YtVideo = 'YT_VIDEO'
}

export type Month = {
  __typename?: 'Month';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  number: Scalars['Float']['output'];
  workDays: Scalars['Float']['output'];
  year: Year;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createCategory: Category;
  createChatElement: Chat;
  createCompetition: Competition;
  createContact: Contact;
  createForm: Form;
  createMember: Member;
  createNationalCompetition: NationalCompetition;
  createSkillCategory: SkillCategory;
  createSponsor: Sponsor;
  createUser: User;
  deleteArticle: Scalars['Boolean']['output'];
  deleteCategory: Scalars['Boolean']['output'];
  deleteChatElement: Scalars['Boolean']['output'];
  deleteCompetition: Scalars['Boolean']['output'];
  deleteCompetitionRegistration: Scalars['Boolean']['output'];
  deleteFile: Scalars['Boolean']['output'];
  deleteForm: Scalars['Boolean']['output'];
  deleteFormEntry: Scalars['Boolean']['output'];
  deleteNationalCompetition: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  forgetPassword: Scalars['Boolean']['output'];
  registerForCompetition: Scalars['Boolean']['output'];
  removeContact: Scalars['Boolean']['output'];
  removeSkillCategory: Scalars['Boolean']['output'];
  removeSponsor: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  /** Sync WSHU data */
  syncWshuDatabase: SyncResult;
  toggleArticleHighlighted: Article;
  toggleArticleHomeHighlighted: Article;
  toggleCompetitorIsSelected: Scalars['Boolean']['output'];
  toggleMemberIsSelected: Scalars['Boolean']['output'];
  updateArticle: Article;
  updateCategory: Category;
  updateChatElement: Chat;
  updateCompetition: Competition;
  updateCompetitionRegistration: Scalars['Boolean']['output'];
  updateCompetitor: Competitor;
  updateCompetitorImage: Scalars['Boolean']['output'];
  updateCompetitorResult: Scalars['Boolean']['output'];
  updateContact: Contact;
  updateFile: File;
  updateForm: Scalars['Boolean']['output'];
  updateFormNotificationEmail: Scalars['Boolean']['output'];
  updateMember: Member;
  updateMemberImage: Scalars['Boolean']['output'];
  updateNationalCompetition: NationalCompetition;
  updateSiteSettings: SiteSettings;
  updateSkill: Skill;
  updateSkillCategory: SkillCategory;
  updateSponsor: Sponsor;
  updateTranslation: I18n;
  updateUser: User;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationCreateChatElementArgs = {
  input: CreateChatInput;
};


export type MutationCreateCompetitionArgs = {
  competition: CreateCompetitionInput;
};


export type MutationCreateContactArgs = {
  input: CreateContactInput;
};


export type MutationCreateFormArgs = {
  input: CreateFormInput;
};


export type MutationCreateMemberArgs = {
  member: CreateMemberInput;
};


export type MutationCreateNationalCompetitionArgs = {
  nationalCompetition: CreateNationalCompetitionInput;
};


export type MutationCreateSkillCategoryArgs = {
  createSkillCategoryInput: CreateSkillCategoryInput;
};


export type MutationCreateSponsorArgs = {
  sponsor: CreateSponsorInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
  roles: RolesInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteChatElementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompetitionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompetitionRegistrationArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFormArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFormEntryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNationalCompetitionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationRegisterForCompetitionArgs = {
  input: CompetitionRegistrationInput;
};


export type MutationRemoveContactArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSkillCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveSponsorArgs = {
  id: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationToggleArticleHighlightedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleArticleHomeHighlightedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleCompetitorIsSelectedArgs = {
  competitionId: Scalars['String']['input'];
  competitorId: Scalars['String']['input'];
};


export type MutationToggleMemberIsSelectedArgs = {
  competitionId: Scalars['String']['input'];
  memberId: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateArticleInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateChatElementArgs = {
  id: Scalars['ID']['input'];
  input: UpdateChatInput;
};


export type MutationUpdateCompetitionArgs = {
  competition: UpdateCompetitionInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCompetitionRegistrationArgs = {
  id: Scalars['Float']['input'];
  input: UpdateCompetitionRegistrationInput;
};


export type MutationUpdateCompetitorArgs = {
  competitor: UpdateCompetitorInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCompetitorImageArgs = {
  image: UpdateCompetitorImageInput;
};


export type MutationUpdateCompetitorResultArgs = {
  result: UpdateResultInput;
};


export type MutationUpdateContactArgs = {
  input: UpdateContactInput;
};


export type MutationUpdateFileArgs = {
  input: UpdateFileInput;
};


export type MutationUpdateFormArgs = {
  id: Scalars['ID']['input'];
  input: UpdateFormInput;
};


export type MutationUpdateFormNotificationEmailArgs = {
  id: Scalars['ID']['input'];
  input: UpdateFormNotificationEmailInput;
};


export type MutationUpdateMemberArgs = {
  id: Scalars['String']['input'];
  member: UpdateMemberInput;
};


export type MutationUpdateMemberImageArgs = {
  image: UpdateMemberImageInput;
};


export type MutationUpdateNationalCompetitionArgs = {
  id: Scalars['ID']['input'];
  nationalCompetition: UpdateNationalCompetitionInput;
};


export type MutationUpdateSiteSettingsArgs = {
  input: UpdateSiteSettingsInput;
};


export type MutationUpdateSkillArgs = {
  id: Scalars['String']['input'];
  skill: UpdateSkillInput;
};


export type MutationUpdateSkillCategoryArgs = {
  updateSkillCategoryInput: UpdateSkillCategoryInput;
};


export type MutationUpdateSponsorArgs = {
  sponsor: UpdateSponsorInput;
};


export type MutationUpdateTranslationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateI18nInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  roles: RolesInput;
};

export type NationalCompetition = {
  __typename?: 'NationalCompetition';
  ageLimit: Scalars['Float']['output'];
  article: Article;
  competition: Competition;
  competitionEndsAt: Scalars['Timestamp']['output'];
  competitionId: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  notificationEmails: Array<Scalars['String']['output']>;
  registrationEndsAt: Scalars['Timestamp']['output'];
  registrations: Array<CompetitionRegistration>;
  skill: Skill;
  skillId: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedArticle = {
  __typename?: 'PaginatedArticle';
  data: Array<Article>;
  pageInfo: PageInfo;
};

export type PaginatedCompetitor = {
  __typename?: 'PaginatedCompetitor';
  data: Array<Competitor>;
  pageInfo: PageInfo;
};

export type PaginatedContact = {
  __typename?: 'PaginatedContact';
  data: Array<Contact>;
  pageInfo: PageInfo;
};

export type PaginatedForm = {
  __typename?: 'PaginatedForm';
  data: Array<DetailedForm>;
  pageInfo: PageInfo;
};

export type PaginatedMember = {
  __typename?: 'PaginatedMember';
  data: Array<Member>;
  pageInfo: PageInfo;
};

export type PaginatedNationalCompetition = {
  __typename?: 'PaginatedNationalCompetition';
  data: Array<NationalCompetition>;
  pageInfo: PageInfo;
};

export type PaginatedSpnsor = {
  __typename?: 'PaginatedSpnsor';
  data: Array<Sponsor>;
  pageInfo: PageInfo;
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  data: Array<User>;
  pageInfo: PageInfo;
};

export type Position = {
  __typename?: 'Position';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type Profession = {
  __typename?: 'Profession';
  id: Scalars['Int']['output'];
  mkkrLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  number: Scalars['Float']['output'];
  professionMultiplier: ProfessionMultiplier;
  sector: Sector;
  termsAfterElementary?: Maybe<Scalars['Int']['output']>;
  termsAfterSecondary?: Maybe<Scalars['Int']['output']>;
};

export type ProfessionMultiplier = {
  __typename?: 'ProfessionMultiplier';
  id: Scalars['Int']['output'];
  mkkrLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  activeNationalCompetitions: Array<NationalCompetition>;
  activeSkillsJuniorCompetitions: Array<NationalCompetition>;
  article: Article;
  articleById: Article;
  articles: Array<Article>;
  categories: Array<Category>;
  category: Category;
  categoryBySlug: Category;
  certifications: Array<Certification>;
  chat: Chat;
  chatElements: Array<Chat>;
  competition: Competition;
  competitionRegistrations: Array<CompetitionRegistration>;
  competitions: Array<Competition>;
  competitor: Competitor;
  competitors: PaginatedCompetitor;
  contacts: Array<Contact>;
  currentCompetition: Competition;
  expert: Member;
  experts: PaginatedMember;
  files: Array<File>;
  form: DetailedForm;
  formEntries: FormEntriesResponse;
  forms: PaginatedForm;
  galleries: Array<Gallery>;
  gallery: Gallery;
  homeHighlightedArticles: Array<Article>;
  isziirConfig: IsziirConfig;
  kamarak: Array<Kamara>;
  login: LoginResult;
  me: User;
  medals: Array<Medal>;
  member: Member;
  members: PaginatedMember;
  menuItem: MenuItem;
  menuItems: Array<MenuItem>;
  months: Array<Month>;
  nationalCompetition: NationalCompetition;
  nationalCompetitions: PaginatedNationalCompetition;
  nextCompetition: Competition;
  paginatedArticles: PaginatedArticle;
  paginatedContacts: PaginatedContact;
  profession: Profession;
  professions: Array<Profession>;
  roles: Array<Role>;
  searchKepzohelyek: Array<Kepzohely>;
  searchTanacsadok: Array<Tanacsado>;
  site: Site;
  siteSettings: SiteSettings;
  sites: Array<Site>;
  skill: Skill;
  skillCategories: Array<SkillCategory>;
  skills: Array<Skill>;
  skillsJuniorCompetitions: PaginatedNationalCompetition;
  sponsor: Sponsor;
  sponsors: PaginatedSpnsor;
  szakkepesitesek: Array<Szakma>;
  telepulesek: Array<Telepules>;
  termMultipliers: Array<TermMultiplier>;
  translations: Array<I18n>;
  users: PaginatedUser;
  years: Array<Year>;
};


export type QueryArticleArgs = {
  slug: Scalars['String']['input'];
};


export type QueryArticleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryChatArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompetitionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCompetitorArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCompetitorsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryExpertArgs = {
  slug: Scalars['String']['input'];
};


export type QueryExpertsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryFormArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFormEntriesArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFormsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryGalleryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryHomeHighlightedArticlesArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type QueryMemberArgs = {
  slug: Scalars['String']['input'];
};


export type QueryMembersArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryMenuItemArgs = {
  slug: Scalars['String']['input'];
};


export type QueryNationalCompetitionArgs = {
  competitionSlug: Scalars['String']['input'];
  skillSlug: Scalars['String']['input'];
};


export type QueryNationalCompetitionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryPaginatedArticlesArgs = {
  categoryId: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryPaginatedContactsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProfessionArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySearchKepzohelyekArgs = {
  megyeId: Scalars['String']['input'];
  szakmaId?: InputMaybe<Scalars['String']['input']>;
  tipus?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchTanacsadokArgs = {
  telepulesId: Scalars['String']['input'];
};


export type QuerySiteArgs = {
  id: Scalars['String']['input'];
};


export type QuerySkillArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySkillsJuniorCompetitionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QuerySponsorArgs = {
  articleSlug: Scalars['String']['input'];
};


export type QuerySponsorsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryTranslationsArgs = {
  categoryId: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Result = {
  __typename?: 'Result';
  competitionId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medals: Array<Medal>;
  place: Scalars['Float']['output'];
  score: Scalars['Float']['output'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type RolesInput = {
  roles?: InputMaybe<Array<UserRoleInput>>;
};

export type Sector = {
  __typename?: 'Sector';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Site = {
  __typename?: 'Site';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type SiteSettings = {
  __typename?: 'SiteSettings';
  chatEnabled?: Maybe<Scalars['Boolean']['output']>;
  formsEnabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type Skill = {
  __typename?: 'Skill';
  article: Article;
  category?: Maybe<SkillCategory>;
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  name: Scalars['String']['output'];
  nameEnEs: Scalars['String']['output'];
  nameEnWs: Scalars['String']['output'];
  nationalCompetitions: Array<NationalCompetition>;
  skillCategoryId?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  sponsors: Array<Sponsor>;
  wsId: Scalars['String']['output'];
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  icon?: Maybe<File>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Sponsor = {
  __typename?: 'Sponsor';
  article: Article;
  competitions: Array<Competition>;
  homepageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  name: Scalars['String']['output'];
  skills: Array<Skill>;
};


export type SponsorSkillsArgs = {
  competitionId?: InputMaybe<Scalars['String']['input']>;
};

export type SponsorCompetitionPivotInput = {
  competitionId: Scalars['String']['input'];
  skillIds: Array<Scalars['String']['input']>;
};

export type Srcset = {
  __typename?: 'Srcset';
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type SyncResult = {
  __typename?: 'SyncResult';
  competitions: EntitySyncResult;
  skills: EntitySyncResult;
};

export type Szakma = {
  __typename?: 'Szakma';
  azonosito: Scalars['String']['output'];
  cimke: Scalars['String']['output'];
  id: Scalars['String']['output'];
  nev: Scalars['String']['output'];
  tipus: Scalars['String']['output'];
};

export type Tanacsado = {
  __typename?: 'Tanacsado';
  email: Scalars['String']['output'];
  nev: Scalars['String']['output'];
  telefon: Array<Scalars['String']['output']>;
};

export type Telepules = {
  __typename?: 'Telepules';
  id: Scalars['String']['output'];
  megyeId: Scalars['String']['output'];
  nev: Scalars['String']['output'];
};

export type TermMultiplier = {
  __typename?: 'TermMultiplier';
  id: Scalars['Int']['output'];
  mkkrLevel: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  term: Scalars['Int']['output'];
  termsAfterElementary: Scalars['Int']['output'];
  termsAfterSecondary: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type UpdateArticleInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  highlighted?: InputMaybe<Scalars['Boolean']['input']>;
  homeHighlighted?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<FileInput>;
  lead?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  articleId?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<FileInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateChatInput = {
  categoryId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type UpdateCompetitionInput = {
  article: CreateArticleInput;
  endDate?: InputMaybe<Scalars['String']['input']>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  isNext?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startingDate?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompetitionRegistrationInput = {
  birthDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  nationalCompetitionId: Scalars['Float']['input'];
  phone: Scalars['String']['input'];
};

export type UpdateCompetitorImageInput = {
  competitionId: Scalars['String']['input'];
  competitorId: Scalars['String']['input'];
  imageFileId: Scalars['String']['input'];
};

export type UpdateCompetitorInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  workplace?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<FileInput>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['Float']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFileInput = {
  categoryId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['ID']['input'];
};

export type UpdateFormField = {
  displayCondition?: InputMaybe<InputFormFieldDisplayCondition>;
  formFieldGroupId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  options: Array<InputFormFieldOptions>;
  position: Scalars['Float']['input'];
  type: FormFieldType;
  validations: InputFormFieldValidations;
};

export type UpdateFormFieldGroup = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayCondition?: InputMaybe<InputFormFieldDisplayCondition>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Float']['input'];
};

export type UpdateFormInput = {
  active: Scalars['Boolean']['input'];
  copyFrom?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formFieldGroups: Array<UpdateFormFieldGroup>;
  formFields: Array<UpdateFormField>;
  image?: InputMaybe<FileInput>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFormNotificationEmailInput = {
  notificationArticle: CreateArticleInput;
  notificationEmailsEnabled: Scalars['Boolean']['input'];
};

export type UpdateI18nInput = {
  text: Scalars['String']['input'];
};

export type UpdateMemberImageInput = {
  competitionId: Scalars['String']['input'];
  imageFileId: Scalars['String']['input'];
  memberId: Scalars['String']['input'];
};

export type UpdateMemberInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  competitionIds?: InputMaybe<Array<MemberCompetitionPivotInput>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Float']['input']>;
  roleName?: InputMaybe<MemberRole>;
  slug?: InputMaybe<Scalars['String']['input']>;
  workplace?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNationalCompetitionInput = {
  ageLimit: Scalars['Float']['input'];
  article: CreateArticleInput;
  competitionEndsAt: Scalars['Timestamp']['input'];
  competitionId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationEmails: Array<Scalars['String']['input']>;
  registrationEndsAt: Scalars['Timestamp']['input'];
  skillId: Scalars['String']['input'];
};

export type UpdateResultInput = {
  competitionId: Scalars['String']['input'];
  competitorId: Scalars['String']['input'];
  medalIds: Array<Scalars['Int']['input']>;
  place?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSiteSettingsInput = {
  chatEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateSkillCategoryInput = {
  icon?: InputMaybe<FileInput>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSkillInput = {
  article: CreateArticleInput;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  image: FileInput;
  name?: InputMaybe<Scalars['String']['input']>;
  wsId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSponsorInput = {
  article?: InputMaybe<CreateArticleInput>;
  competitions?: InputMaybe<Array<SponsorCompetitionPivotInput>>;
  homepageUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<FileInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  admin?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  admin: Scalars['Boolean']['output'];
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  roles: Array<UserRole>;
  sites: Array<Site>;
  updatedAt: Scalars['Timestamp']['output'];
};

export type UserRole = {
  __typename?: 'UserRole';
  role: Role;
  site: Site;
};

export type UserRoleInput = {
  role: Role;
  siteId: Scalars['ID']['input'];
};

export type Year = {
  __typename?: 'Year';
  id: Scalars['Int']['output'];
  months: Array<Month>;
  workDays: Scalars['Float']['output'];
  year: Scalars['Float']['output'];
};
