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
  post?: Maybe<Post>;
  postId: Scalars['BigInt']['output'];
  reactions: Array<Reaction>;
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};


export type CommentChildrenArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type CommentReactionsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type CommentTagsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type CreateComment = {
  content: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['BigInt']['input']>;
  postId: Scalars['BigInt']['input'];
};

export type CreatePost = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublish?: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  type?: PostType;
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
  addTag: TagRelation;
  createComment: Comment;
  createPost: Post;
  createTag: Tag;
  deleteComment: Comment;
  deletePost: Post;
  deleteReaction: Reaction;
  deleteTag: Tag;
  removeTag: TagRelation;
  updateComment: Comment;
  updatePost: Post;
  updateTag: Tag;
  upsertReaction: Reaction;
};


export type MutationAddTagArgs = {
  entityId: Scalars['BigInt']['input'];
  entityName: EntityName;
  tagId: Scalars['BigInt']['input'];
};


export type MutationCreateCommentArgs = {
  input: CreateComment;
};


export type MutationCreatePostArgs = {
  input: CreatePost;
};


export type MutationCreateTagArgs = {
  input: CreateTag;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationDeleteReactionArgs = {
  entityId: Scalars['BigInt']['input'];
  entityName: EntityName;
};


export type MutationDeleteTagArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationRemoveTagArgs = {
  entityId: Scalars['BigInt']['input'];
  entityName: EntityName;
  tagId: Scalars['BigInt']['input'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['BigInt']['input'];
  input: UpdateComment;
};


export type MutationUpdatePostArgs = {
  id: Scalars['BigInt']['input'];
  input: UpdatePost;
};


export type MutationUpdateTagArgs = {
  id: Scalars['BigInt']['input'];
  input: UpdateTag;
};


export type MutationUpsertReactionArgs = {
  entityId: Scalars['BigInt']['input'];
  entityName: EntityName;
  rating?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ReactionType>;
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


export type PostCommentsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type PostReactionsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type PostTagsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export enum PostType {
  Compact = 'COMPACT',
  Photos = 'PHOTOS',
  Standard = 'STANDARD'
}

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  comments: Array<Comment>;
  ping: Scalars['String']['output'];
  post: Post;
  posts: Array<Post>;
  tag: Tag;
  tags: Array<Tag>;
  user: User;
};


export type QueryCommentArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryCommentsArgs = {
  includeUnpublished?: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['BigInt']['input'];
};


export type QueryPostArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryPostsArgs = {
  includeUnpublished?: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type: Array<PostType>;
};


export type QueryTagArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryTagsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Reaction = BaseNode & Entity & {
  __typename?: 'Reaction';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  entity?: Maybe<EntityUnion>;
  entityId: Scalars['BigInt']['output'];
  entityName: EntityName;
  id: Scalars['BigInt']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
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


export type TagCommentsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type TagPostsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type TagRelation = BaseNode & Entity & {
  __typename?: 'TagRelation';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  entity?: Maybe<EntityUnion>;
  entityId: Scalars['BigInt']['output'];
  entityName: EntityName;
  id: Scalars['BigInt']['output'];
  tagId: Scalars['BigInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type UpdateComment = {
  content?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['BigInt']['input']>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdatePost = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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

export type PostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  includeUnpublished: Scalars['Boolean']['input'];
  type: Array<PostType> | PostType;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, type: PostType, isPublish: boolean, title: string, description?: string | null, content?: string | null, createdAt: string, createdUser: { __typename?: 'User', name?: string | null, nickname?: string | null, picture: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> };

export type CreatePostMutationVariables = Exact<{
  input: CreatePost;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createdPost: { __typename?: 'Post', id: string } };


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
export const PostsDocument = gql`
    query Posts($limit: Int, $offset: Int, $includeUnpublished: Boolean!, $type: [PostType!]!) {
  posts(
    limit: $limit
    offset: $offset
    includeUnpublished: $includeUnpublished
    type: $type
  ) {
    id
    type
    isPublish
    title
    description
    content
    createdAt
    createdUser {
      name
      nickname
      picture
    }
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      includeUnpublished: // value for 'includeUnpublished'
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables> & ({ variables: PostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePost!) {
  createdPost: createPost(input: $input) {
    id
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;