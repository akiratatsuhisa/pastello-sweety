import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: string; output: string; }
  DateTime: { input: string; output: string; }
};

export type BaseNode = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  id: Scalars['BigInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type Comment = BaseNode & {
  __typename?: 'Comment';
  children: Array<Comment>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  id: Scalars['BigInt']['output'];
  parent?: Maybe<Comment>;
  parentId?: Maybe<Scalars['BigInt']['output']>;
  post: Post;
  postId: Scalars['BigInt']['output'];
  reactions: Array<Reaction>;
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type CreateTag = {
  name: Scalars['String']['input'];
};

export type Entity = {
  entityId: Scalars['BigInt']['output'];
  entityName: EntityName;
};

export enum EntityName {
  Comment = 'COMMENT',
  Post = 'POST'
}

export type EntityUnion = Comment | Post;

export type Mutation = {
  __typename?: 'Mutation';
  createTag: Tag;
  deleteTag: Tag;
  updateTag: Tag;
};


export type MutationCreateTagArgs = {
  input: CreateTag;
};


export type MutationDeleteTagArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationUpdateTagArgs = {
  id: Scalars['BigInt']['input'];
  input: UpdateTag;
};

export type Post = BaseNode & {
  __typename?: 'Post';
  comments: Array<Comment>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  isPublish: Scalars['Boolean']['output'];
  reactions: Array<Reaction>;
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  type: PostType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export enum PostType {
  Compact = 'COMPACT',
  Photos = 'PHOTOS',
  Standard = 'STANDARD'
}

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  ping: Scalars['String']['output'];
  post: Post;
  reaction: Reaction;
  tag: Tag;
  tagRelation: TagRelation;
  tags: Array<Tag>;
  user: User;
};


export type QueryTagArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Reaction = BaseNode & Entity & {
  __typename?: 'Reaction';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  entity: EntityUnion;
  entityId: Scalars['BigInt']['output'];
  entityName: EntityName;
  id: Scalars['BigInt']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<ReactionType>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export enum ReactionType {
  Angry = 'ANGRY',
  Like = 'LIKE',
  Love = 'LOVE',
  Neutral = 'NEUTRAL',
  Unlike = 'UNLIKE',
  Upset = 'UPSET',
  Wow = 'WOW'
}

export type Tag = BaseNode & {
  __typename?: 'Tag';
  comments: Array<Comment>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type TagRelation = BaseNode & Entity & {
  __typename?: 'TagRelation';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  entity: EntityUnion;
  entityId: Scalars['BigInt']['output'];
  entityName: EntityName;
  id: Scalars['BigInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type UpdateTag = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  picture: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };


export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export function usePingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingSuspenseQueryHookResult = ReturnType<typeof usePingSuspenseQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;