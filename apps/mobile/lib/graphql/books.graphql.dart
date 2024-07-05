import 'dart:async';
import 'package:flutter/widgets.dart' as widgets;
import 'package:gql/ast.dart';
import 'package:graphql/client.dart' as graphql;
import 'package:graphql_flutter/graphql_flutter.dart' as graphql_flutter;
import 'schema.graphql.dart';

class Variables$Query$Books {
  factory Variables$Query$Books({Input$BooksFilter? filter}) =>
      Variables$Query$Books._({
        if (filter != null) r'filter': filter,
      });

  Variables$Query$Books._(this._$data);

  factory Variables$Query$Books.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    if (data.containsKey('filter')) {
      final l$filter = data['filter'];
      result$data['filter'] = l$filter == null
          ? null
          : Input$BooksFilter.fromJson((l$filter as Map<String, dynamic>));
    }
    return Variables$Query$Books._(result$data);
  }

  Map<String, dynamic> _$data;

  Input$BooksFilter? get filter => (_$data['filter'] as Input$BooksFilter?);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    if (_$data.containsKey('filter')) {
      final l$filter = filter;
      result$data['filter'] = l$filter?.toJson();
    }
    return result$data;
  }

  CopyWith$Variables$Query$Books<Variables$Query$Books> get copyWith =>
      CopyWith$Variables$Query$Books(
        this,
        (i) => i,
      );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$Query$Books) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$filter = filter;
    final lOther$filter = other.filter;
    if (_$data.containsKey('filter') != other._$data.containsKey('filter')) {
      return false;
    }
    if (l$filter != lOther$filter) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$filter = filter;
    return Object.hashAll([_$data.containsKey('filter') ? l$filter : const {}]);
  }
}

abstract class CopyWith$Variables$Query$Books<TRes> {
  factory CopyWith$Variables$Query$Books(
    Variables$Query$Books instance,
    TRes Function(Variables$Query$Books) then,
  ) = _CopyWithImpl$Variables$Query$Books;

  factory CopyWith$Variables$Query$Books.stub(TRes res) =
      _CopyWithStubImpl$Variables$Query$Books;

  TRes call({Input$BooksFilter? filter});
}

class _CopyWithImpl$Variables$Query$Books<TRes>
    implements CopyWith$Variables$Query$Books<TRes> {
  _CopyWithImpl$Variables$Query$Books(
    this._instance,
    this._then,
  );

  final Variables$Query$Books _instance;

  final TRes Function(Variables$Query$Books) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({Object? filter = _undefined}) => _then(Variables$Query$Books._({
        ..._instance._$data,
        if (filter != _undefined) 'filter': (filter as Input$BooksFilter?),
      }));
}

class _CopyWithStubImpl$Variables$Query$Books<TRes>
    implements CopyWith$Variables$Query$Books<TRes> {
  _CopyWithStubImpl$Variables$Query$Books(this._res);

  TRes _res;

  call({Input$BooksFilter? filter}) => _res;
}

class Query$Books {
  Query$Books({
    required this.books,
    this.$__typename = 'Query',
  });

  factory Query$Books.fromJson(Map<String, dynamic> json) {
    final l$books = json['books'];
    final l$$__typename = json['__typename'];
    return Query$Books(
      books: (l$books as List<dynamic>)
          .map((e) => Query$Books$books.fromJson((e as Map<String, dynamic>)))
          .toList(),
      $__typename: (l$$__typename as String),
    );
  }

  final List<Query$Books$books> books;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$books = books;
    _resultData['books'] = l$books.map((e) => e.toJson()).toList();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$books = books;
    final l$$__typename = $__typename;
    return Object.hashAll([
      Object.hashAll(l$books.map((v) => v)),
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Query$Books) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$books = books;
    final lOther$books = other.books;
    if (l$books.length != lOther$books.length) {
      return false;
    }
    for (int i = 0; i < l$books.length; i++) {
      final l$books$entry = l$books[i];
      final lOther$books$entry = lOther$books[i];
      if (l$books$entry != lOther$books$entry) {
        return false;
      }
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Query$Books on Query$Books {
  CopyWith$Query$Books<Query$Books> get copyWith => CopyWith$Query$Books(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Query$Books<TRes> {
  factory CopyWith$Query$Books(
    Query$Books instance,
    TRes Function(Query$Books) then,
  ) = _CopyWithImpl$Query$Books;

  factory CopyWith$Query$Books.stub(TRes res) = _CopyWithStubImpl$Query$Books;

  TRes call({
    List<Query$Books$books>? books,
    String? $__typename,
  });
  TRes books(
      Iterable<Query$Books$books> Function(
              Iterable<CopyWith$Query$Books$books<Query$Books$books>>)
          _fn);
}

class _CopyWithImpl$Query$Books<TRes> implements CopyWith$Query$Books<TRes> {
  _CopyWithImpl$Query$Books(
    this._instance,
    this._then,
  );

  final Query$Books _instance;

  final TRes Function(Query$Books) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? books = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Query$Books(
        books: books == _undefined || books == null
            ? _instance.books
            : (books as List<Query$Books$books>),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));

  TRes books(
          Iterable<Query$Books$books> Function(
                  Iterable<CopyWith$Query$Books$books<Query$Books$books>>)
              _fn) =>
      call(
          books: _fn(_instance.books.map((e) => CopyWith$Query$Books$books(
                e,
                (i) => i,
              ))).toList());
}

class _CopyWithStubImpl$Query$Books<TRes>
    implements CopyWith$Query$Books<TRes> {
  _CopyWithStubImpl$Query$Books(this._res);

  TRes _res;

  call({
    List<Query$Books$books>? books,
    String? $__typename,
  }) =>
      _res;

  books(_fn) => _res;
}

const documentNodeQueryBooks = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.query,
    name: NameNode(value: 'Books'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'filter')),
        type: NamedTypeNode(
          name: NameNode(value: 'BooksFilter'),
          isNonNull: false,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      )
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'books'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'filter'),
            value: VariableNode(name: NameNode(value: 'filter')),
          )
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FieldNode(
            name: NameNode(value: 'id'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'title'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'chapters'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: SelectionSetNode(selections: [
              FieldNode(
                name: NameNode(value: 'id'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null,
              ),
              FieldNode(
                name: NameNode(value: 'title'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null,
              ),
              FieldNode(
                name: NameNode(value: 'createdAt'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null,
              ),
              FieldNode(
                name: NameNode(value: 'createdBy'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null,
              ),
              FieldNode(
                name: NameNode(value: '__typename'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null,
              ),
            ]),
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
]);
Query$Books _parserFn$Query$Books(Map<String, dynamic> data) =>
    Query$Books.fromJson(data);
typedef OnQueryComplete$Query$Books = FutureOr<void> Function(
  Map<String, dynamic>?,
  Query$Books?,
);

class Options$Query$Books extends graphql.QueryOptions<Query$Books> {
  Options$Query$Books({
    String? operationName,
    Variables$Query$Books? variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Query$Books? typedOptimisticResult,
    Duration? pollInterval,
    graphql.Context? context,
    OnQueryComplete$Query$Books? onComplete,
    graphql.OnQueryError? onError,
  })  : onCompleteWithParsed = onComplete,
        super(
          variables: variables?.toJson() ?? {},
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          pollInterval: pollInterval,
          context: context,
          onComplete: onComplete == null
              ? null
              : (data) => onComplete(
                    data,
                    data == null ? null : _parserFn$Query$Books(data),
                  ),
          onError: onError,
          document: documentNodeQueryBooks,
          parserFn: _parserFn$Query$Books,
        );

  final OnQueryComplete$Query$Books? onCompleteWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onComplete == null
            ? super.properties
            : super.properties.where((property) => property != onComplete),
        onCompleteWithParsed,
      ];
}

class WatchOptions$Query$Books extends graphql.WatchQueryOptions<Query$Books> {
  WatchOptions$Query$Books({
    String? operationName,
    Variables$Query$Books? variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Query$Books? typedOptimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables?.toJson() ?? {},
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          document: documentNodeQueryBooks,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$Query$Books,
        );
}

class FetchMoreOptions$Query$Books extends graphql.FetchMoreOptions {
  FetchMoreOptions$Query$Books({
    required graphql.UpdateQuery updateQuery,
    Variables$Query$Books? variables,
  }) : super(
          updateQuery: updateQuery,
          variables: variables?.toJson() ?? {},
          document: documentNodeQueryBooks,
        );
}

extension ClientExtension$Query$Books on graphql.GraphQLClient {
  Future<graphql.QueryResult<Query$Books>> query$Books(
          [Options$Query$Books? options]) async =>
      await this.query(options ?? Options$Query$Books());
  graphql.ObservableQuery<Query$Books> watchQuery$Books(
          [WatchOptions$Query$Books? options]) =>
      this.watchQuery(options ?? WatchOptions$Query$Books());
  void writeQuery$Books({
    required Query$Books data,
    Variables$Query$Books? variables,
    bool broadcast = true,
  }) =>
      this.writeQuery(
        graphql.Request(
          operation: graphql.Operation(document: documentNodeQueryBooks),
          variables: variables?.toJson() ?? const {},
        ),
        data: data.toJson(),
        broadcast: broadcast,
      );
  Query$Books? readQuery$Books({
    Variables$Query$Books? variables,
    bool optimistic = true,
  }) {
    final result = this.readQuery(
      graphql.Request(
        operation: graphql.Operation(document: documentNodeQueryBooks),
        variables: variables?.toJson() ?? const {},
      ),
      optimistic: optimistic,
    );
    return result == null ? null : Query$Books.fromJson(result);
  }
}

graphql_flutter.QueryHookResult<Query$Books> useQuery$Books(
        [Options$Query$Books? options]) =>
    graphql_flutter.useQuery(options ?? Options$Query$Books());
graphql.ObservableQuery<Query$Books> useWatchQuery$Books(
        [WatchOptions$Query$Books? options]) =>
    graphql_flutter.useWatchQuery(options ?? WatchOptions$Query$Books());

class Query$Books$Widget extends graphql_flutter.Query<Query$Books> {
  Query$Books$Widget({
    widgets.Key? key,
    Options$Query$Books? options,
    required graphql_flutter.QueryBuilder<Query$Books> builder,
  }) : super(
          key: key,
          options: options ?? Options$Query$Books(),
          builder: builder,
        );
}

class Query$Books$books {
  Query$Books$books({
    required this.id,
    required this.title,
    required this.createdAt,
    required this.updatedAt,
    required this.chapters,
    this.$__typename = 'Book',
  });

  factory Query$Books$books.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$title = json['title'];
    final l$createdAt = json['createdAt'];
    final l$updatedAt = json['updatedAt'];
    final l$chapters = json['chapters'];
    final l$$__typename = json['__typename'];
    return Query$Books$books(
      id: (l$id as String),
      title: (l$title as String),
      createdAt: (l$createdAt as String),
      updatedAt: (l$updatedAt as String),
      chapters: (l$chapters as List<dynamic>)
          .map((e) =>
              Query$Books$books$chapters.fromJson((e as Map<String, dynamic>)))
          .toList(),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String title;

  final String createdAt;

  final String updatedAt;

  final List<Query$Books$books$chapters> chapters;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$title = title;
    _resultData['title'] = l$title;
    final l$createdAt = createdAt;
    _resultData['createdAt'] = l$createdAt;
    final l$updatedAt = updatedAt;
    _resultData['updatedAt'] = l$updatedAt;
    final l$chapters = chapters;
    _resultData['chapters'] = l$chapters.map((e) => e.toJson()).toList();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$title = title;
    final l$createdAt = createdAt;
    final l$updatedAt = updatedAt;
    final l$chapters = chapters;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$title,
      l$createdAt,
      l$updatedAt,
      Object.hashAll(l$chapters.map((v) => v)),
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Query$Books$books) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$updatedAt = updatedAt;
    final lOther$updatedAt = other.updatedAt;
    if (l$updatedAt != lOther$updatedAt) {
      return false;
    }
    final l$chapters = chapters;
    final lOther$chapters = other.chapters;
    if (l$chapters.length != lOther$chapters.length) {
      return false;
    }
    for (int i = 0; i < l$chapters.length; i++) {
      final l$chapters$entry = l$chapters[i];
      final lOther$chapters$entry = lOther$chapters[i];
      if (l$chapters$entry != lOther$chapters$entry) {
        return false;
      }
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Query$Books$books on Query$Books$books {
  CopyWith$Query$Books$books<Query$Books$books> get copyWith =>
      CopyWith$Query$Books$books(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Query$Books$books<TRes> {
  factory CopyWith$Query$Books$books(
    Query$Books$books instance,
    TRes Function(Query$Books$books) then,
  ) = _CopyWithImpl$Query$Books$books;

  factory CopyWith$Query$Books$books.stub(TRes res) =
      _CopyWithStubImpl$Query$Books$books;

  TRes call({
    String? id,
    String? title,
    String? createdAt,
    String? updatedAt,
    List<Query$Books$books$chapters>? chapters,
    String? $__typename,
  });
  TRes chapters(
      Iterable<Query$Books$books$chapters> Function(
              Iterable<
                  CopyWith$Query$Books$books$chapters<
                      Query$Books$books$chapters>>)
          _fn);
}

class _CopyWithImpl$Query$Books$books<TRes>
    implements CopyWith$Query$Books$books<TRes> {
  _CopyWithImpl$Query$Books$books(
    this._instance,
    this._then,
  );

  final Query$Books$books _instance;

  final TRes Function(Query$Books$books) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? title = _undefined,
    Object? createdAt = _undefined,
    Object? updatedAt = _undefined,
    Object? chapters = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Query$Books$books(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        title: title == _undefined || title == null
            ? _instance.title
            : (title as String),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as String),
        updatedAt: updatedAt == _undefined || updatedAt == null
            ? _instance.updatedAt
            : (updatedAt as String),
        chapters: chapters == _undefined || chapters == null
            ? _instance.chapters
            : (chapters as List<Query$Books$books$chapters>),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));

  TRes chapters(
          Iterable<Query$Books$books$chapters> Function(
                  Iterable<
                      CopyWith$Query$Books$books$chapters<
                          Query$Books$books$chapters>>)
              _fn) =>
      call(
          chapters: _fn(
              _instance.chapters.map((e) => CopyWith$Query$Books$books$chapters(
                    e,
                    (i) => i,
                  ))).toList());
}

class _CopyWithStubImpl$Query$Books$books<TRes>
    implements CopyWith$Query$Books$books<TRes> {
  _CopyWithStubImpl$Query$Books$books(this._res);

  TRes _res;

  call({
    String? id,
    String? title,
    String? createdAt,
    String? updatedAt,
    List<Query$Books$books$chapters>? chapters,
    String? $__typename,
  }) =>
      _res;

  chapters(_fn) => _res;
}

class Query$Books$books$chapters {
  Query$Books$books$chapters({
    required this.id,
    required this.title,
    required this.createdAt,
    required this.createdBy,
    this.$__typename = 'Chapter',
  });

  factory Query$Books$books$chapters.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$title = json['title'];
    final l$createdAt = json['createdAt'];
    final l$createdBy = json['createdBy'];
    final l$$__typename = json['__typename'];
    return Query$Books$books$chapters(
      id: (l$id as String),
      title: (l$title as String),
      createdAt: (l$createdAt as String),
      createdBy: (l$createdBy as String),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String title;

  final String createdAt;

  final String createdBy;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$title = title;
    _resultData['title'] = l$title;
    final l$createdAt = createdAt;
    _resultData['createdAt'] = l$createdAt;
    final l$createdBy = createdBy;
    _resultData['createdBy'] = l$createdBy;
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$title = title;
    final l$createdAt = createdAt;
    final l$createdBy = createdBy;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$title,
      l$createdAt,
      l$createdBy,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Query$Books$books$chapters) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$createdBy = createdBy;
    final lOther$createdBy = other.createdBy;
    if (l$createdBy != lOther$createdBy) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Query$Books$books$chapters
    on Query$Books$books$chapters {
  CopyWith$Query$Books$books$chapters<Query$Books$books$chapters>
      get copyWith => CopyWith$Query$Books$books$chapters(
            this,
            (i) => i,
          );
}

abstract class CopyWith$Query$Books$books$chapters<TRes> {
  factory CopyWith$Query$Books$books$chapters(
    Query$Books$books$chapters instance,
    TRes Function(Query$Books$books$chapters) then,
  ) = _CopyWithImpl$Query$Books$books$chapters;

  factory CopyWith$Query$Books$books$chapters.stub(TRes res) =
      _CopyWithStubImpl$Query$Books$books$chapters;

  TRes call({
    String? id,
    String? title,
    String? createdAt,
    String? createdBy,
    String? $__typename,
  });
}

class _CopyWithImpl$Query$Books$books$chapters<TRes>
    implements CopyWith$Query$Books$books$chapters<TRes> {
  _CopyWithImpl$Query$Books$books$chapters(
    this._instance,
    this._then,
  );

  final Query$Books$books$chapters _instance;

  final TRes Function(Query$Books$books$chapters) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? title = _undefined,
    Object? createdAt = _undefined,
    Object? createdBy = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Query$Books$books$chapters(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        title: title == _undefined || title == null
            ? _instance.title
            : (title as String),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as String),
        createdBy: createdBy == _undefined || createdBy == null
            ? _instance.createdBy
            : (createdBy as String),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
}

class _CopyWithStubImpl$Query$Books$books$chapters<TRes>
    implements CopyWith$Query$Books$books$chapters<TRes> {
  _CopyWithStubImpl$Query$Books$books$chapters(this._res);

  TRes _res;

  call({
    String? id,
    String? title,
    String? createdAt,
    String? createdBy,
    String? $__typename,
  }) =>
      _res;
}

class Variables$Query$Book {
  factory Variables$Query$Book({required String id}) => Variables$Query$Book._({
        r'id': id,
      });

  Variables$Query$Book._(this._$data);

  factory Variables$Query$Book.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$id = data['id'];
    result$data['id'] = (l$id as String);
    return Variables$Query$Book._(result$data);
  }

  Map<String, dynamic> _$data;

  String get id => (_$data['id'] as String);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$id = id;
    result$data['id'] = l$id;
    return result$data;
  }

  CopyWith$Variables$Query$Book<Variables$Query$Book> get copyWith =>
      CopyWith$Variables$Query$Book(
        this,
        (i) => i,
      );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$Query$Book) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$id = id;
    return Object.hashAll([l$id]);
  }
}

abstract class CopyWith$Variables$Query$Book<TRes> {
  factory CopyWith$Variables$Query$Book(
    Variables$Query$Book instance,
    TRes Function(Variables$Query$Book) then,
  ) = _CopyWithImpl$Variables$Query$Book;

  factory CopyWith$Variables$Query$Book.stub(TRes res) =
      _CopyWithStubImpl$Variables$Query$Book;

  TRes call({String? id});
}

class _CopyWithImpl$Variables$Query$Book<TRes>
    implements CopyWith$Variables$Query$Book<TRes> {
  _CopyWithImpl$Variables$Query$Book(
    this._instance,
    this._then,
  );

  final Variables$Query$Book _instance;

  final TRes Function(Variables$Query$Book) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({Object? id = _undefined}) => _then(Variables$Query$Book._({
        ..._instance._$data,
        if (id != _undefined && id != null) 'id': (id as String),
      }));
}

class _CopyWithStubImpl$Variables$Query$Book<TRes>
    implements CopyWith$Variables$Query$Book<TRes> {
  _CopyWithStubImpl$Variables$Query$Book(this._res);

  TRes _res;

  call({String? id}) => _res;
}

class Query$Book {
  Query$Book({
    required this.book,
    this.$__typename = 'Query',
  });

  factory Query$Book.fromJson(Map<String, dynamic> json) {
    final l$book = json['book'];
    final l$$__typename = json['__typename'];
    return Query$Book(
      book: Query$Book$book.fromJson((l$book as Map<String, dynamic>)),
      $__typename: (l$$__typename as String),
    );
  }

  final Query$Book$book book;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$book = book;
    _resultData['book'] = l$book.toJson();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$book = book;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$book,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Query$Book) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$book = book;
    final lOther$book = other.book;
    if (l$book != lOther$book) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Query$Book on Query$Book {
  CopyWith$Query$Book<Query$Book> get copyWith => CopyWith$Query$Book(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Query$Book<TRes> {
  factory CopyWith$Query$Book(
    Query$Book instance,
    TRes Function(Query$Book) then,
  ) = _CopyWithImpl$Query$Book;

  factory CopyWith$Query$Book.stub(TRes res) = _CopyWithStubImpl$Query$Book;

  TRes call({
    Query$Book$book? book,
    String? $__typename,
  });
  CopyWith$Query$Book$book<TRes> get book;
}

class _CopyWithImpl$Query$Book<TRes> implements CopyWith$Query$Book<TRes> {
  _CopyWithImpl$Query$Book(
    this._instance,
    this._then,
  );

  final Query$Book _instance;

  final TRes Function(Query$Book) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? book = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Query$Book(
        book: book == _undefined || book == null
            ? _instance.book
            : (book as Query$Book$book),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));

  CopyWith$Query$Book$book<TRes> get book {
    final local$book = _instance.book;
    return CopyWith$Query$Book$book(local$book, (e) => call(book: e));
  }
}

class _CopyWithStubImpl$Query$Book<TRes> implements CopyWith$Query$Book<TRes> {
  _CopyWithStubImpl$Query$Book(this._res);

  TRes _res;

  call({
    Query$Book$book? book,
    String? $__typename,
  }) =>
      _res;

  CopyWith$Query$Book$book<TRes> get book =>
      CopyWith$Query$Book$book.stub(_res);
}

const documentNodeQueryBook = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.query,
    name: NameNode(value: 'Book'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'id')),
        type: NamedTypeNode(
          name: NameNode(value: 'BigInt'),
          isNonNull: true,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      )
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'book'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'id'),
            value: VariableNode(name: NameNode(value: 'id')),
          )
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FieldNode(
            name: NameNode(value: 'id'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'title'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
]);
Query$Book _parserFn$Query$Book(Map<String, dynamic> data) =>
    Query$Book.fromJson(data);
typedef OnQueryComplete$Query$Book = FutureOr<void> Function(
  Map<String, dynamic>?,
  Query$Book?,
);

class Options$Query$Book extends graphql.QueryOptions<Query$Book> {
  Options$Query$Book({
    String? operationName,
    required Variables$Query$Book variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Query$Book? typedOptimisticResult,
    Duration? pollInterval,
    graphql.Context? context,
    OnQueryComplete$Query$Book? onComplete,
    graphql.OnQueryError? onError,
  })  : onCompleteWithParsed = onComplete,
        super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          pollInterval: pollInterval,
          context: context,
          onComplete: onComplete == null
              ? null
              : (data) => onComplete(
                    data,
                    data == null ? null : _parserFn$Query$Book(data),
                  ),
          onError: onError,
          document: documentNodeQueryBook,
          parserFn: _parserFn$Query$Book,
        );

  final OnQueryComplete$Query$Book? onCompleteWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onComplete == null
            ? super.properties
            : super.properties.where((property) => property != onComplete),
        onCompleteWithParsed,
      ];
}

class WatchOptions$Query$Book extends graphql.WatchQueryOptions<Query$Book> {
  WatchOptions$Query$Book({
    String? operationName,
    required Variables$Query$Book variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Query$Book? typedOptimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          document: documentNodeQueryBook,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$Query$Book,
        );
}

class FetchMoreOptions$Query$Book extends graphql.FetchMoreOptions {
  FetchMoreOptions$Query$Book({
    required graphql.UpdateQuery updateQuery,
    required Variables$Query$Book variables,
  }) : super(
          updateQuery: updateQuery,
          variables: variables.toJson(),
          document: documentNodeQueryBook,
        );
}

extension ClientExtension$Query$Book on graphql.GraphQLClient {
  Future<graphql.QueryResult<Query$Book>> query$Book(
          Options$Query$Book options) async =>
      await this.query(options);
  graphql.ObservableQuery<Query$Book> watchQuery$Book(
          WatchOptions$Query$Book options) =>
      this.watchQuery(options);
  void writeQuery$Book({
    required Query$Book data,
    required Variables$Query$Book variables,
    bool broadcast = true,
  }) =>
      this.writeQuery(
        graphql.Request(
          operation: graphql.Operation(document: documentNodeQueryBook),
          variables: variables.toJson(),
        ),
        data: data.toJson(),
        broadcast: broadcast,
      );
  Query$Book? readQuery$Book({
    required Variables$Query$Book variables,
    bool optimistic = true,
  }) {
    final result = this.readQuery(
      graphql.Request(
        operation: graphql.Operation(document: documentNodeQueryBook),
        variables: variables.toJson(),
      ),
      optimistic: optimistic,
    );
    return result == null ? null : Query$Book.fromJson(result);
  }
}

graphql_flutter.QueryHookResult<Query$Book> useQuery$Book(
        Options$Query$Book options) =>
    graphql_flutter.useQuery(options);
graphql.ObservableQuery<Query$Book> useWatchQuery$Book(
        WatchOptions$Query$Book options) =>
    graphql_flutter.useWatchQuery(options);

class Query$Book$Widget extends graphql_flutter.Query<Query$Book> {
  Query$Book$Widget({
    widgets.Key? key,
    required Options$Query$Book options,
    required graphql_flutter.QueryBuilder<Query$Book> builder,
  }) : super(
          key: key,
          options: options,
          builder: builder,
        );
}

class Query$Book$book {
  Query$Book$book({
    required this.id,
    required this.title,
    required this.createdBy,
    required this.createdAt,
    required this.updatedBy,
    required this.updatedAt,
    this.$__typename = 'Book',
  });

  factory Query$Book$book.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$title = json['title'];
    final l$createdBy = json['createdBy'];
    final l$createdAt = json['createdAt'];
    final l$updatedBy = json['updatedBy'];
    final l$updatedAt = json['updatedAt'];
    final l$$__typename = json['__typename'];
    return Query$Book$book(
      id: (l$id as String),
      title: (l$title as String),
      createdBy: (l$createdBy as String),
      createdAt: (l$createdAt as String),
      updatedBy: (l$updatedBy as String),
      updatedAt: (l$updatedAt as String),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String title;

  final String createdBy;

  final String createdAt;

  final String updatedBy;

  final String updatedAt;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$title = title;
    _resultData['title'] = l$title;
    final l$createdBy = createdBy;
    _resultData['createdBy'] = l$createdBy;
    final l$createdAt = createdAt;
    _resultData['createdAt'] = l$createdAt;
    final l$updatedBy = updatedBy;
    _resultData['updatedBy'] = l$updatedBy;
    final l$updatedAt = updatedAt;
    _resultData['updatedAt'] = l$updatedAt;
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$title = title;
    final l$createdBy = createdBy;
    final l$createdAt = createdAt;
    final l$updatedBy = updatedBy;
    final l$updatedAt = updatedAt;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$title,
      l$createdBy,
      l$createdAt,
      l$updatedBy,
      l$updatedAt,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Query$Book$book) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$createdBy = createdBy;
    final lOther$createdBy = other.createdBy;
    if (l$createdBy != lOther$createdBy) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$updatedBy = updatedBy;
    final lOther$updatedBy = other.updatedBy;
    if (l$updatedBy != lOther$updatedBy) {
      return false;
    }
    final l$updatedAt = updatedAt;
    final lOther$updatedAt = other.updatedAt;
    if (l$updatedAt != lOther$updatedAt) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Query$Book$book on Query$Book$book {
  CopyWith$Query$Book$book<Query$Book$book> get copyWith =>
      CopyWith$Query$Book$book(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Query$Book$book<TRes> {
  factory CopyWith$Query$Book$book(
    Query$Book$book instance,
    TRes Function(Query$Book$book) then,
  ) = _CopyWithImpl$Query$Book$book;

  factory CopyWith$Query$Book$book.stub(TRes res) =
      _CopyWithStubImpl$Query$Book$book;

  TRes call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  });
}

class _CopyWithImpl$Query$Book$book<TRes>
    implements CopyWith$Query$Book$book<TRes> {
  _CopyWithImpl$Query$Book$book(
    this._instance,
    this._then,
  );

  final Query$Book$book _instance;

  final TRes Function(Query$Book$book) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? title = _undefined,
    Object? createdBy = _undefined,
    Object? createdAt = _undefined,
    Object? updatedBy = _undefined,
    Object? updatedAt = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Query$Book$book(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        title: title == _undefined || title == null
            ? _instance.title
            : (title as String),
        createdBy: createdBy == _undefined || createdBy == null
            ? _instance.createdBy
            : (createdBy as String),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as String),
        updatedBy: updatedBy == _undefined || updatedBy == null
            ? _instance.updatedBy
            : (updatedBy as String),
        updatedAt: updatedAt == _undefined || updatedAt == null
            ? _instance.updatedAt
            : (updatedAt as String),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
}

class _CopyWithStubImpl$Query$Book$book<TRes>
    implements CopyWith$Query$Book$book<TRes> {
  _CopyWithStubImpl$Query$Book$book(this._res);

  TRes _res;

  call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  }) =>
      _res;
}

class Variables$Mutation$CreateBook {
  factory Variables$Mutation$CreateBook(
          {required Input$UpsertBookInput input}) =>
      Variables$Mutation$CreateBook._({
        r'input': input,
      });

  Variables$Mutation$CreateBook._(this._$data);

  factory Variables$Mutation$CreateBook.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$input = data['input'];
    result$data['input'] =
        Input$UpsertBookInput.fromJson((l$input as Map<String, dynamic>));
    return Variables$Mutation$CreateBook._(result$data);
  }

  Map<String, dynamic> _$data;

  Input$UpsertBookInput get input => (_$data['input'] as Input$UpsertBookInput);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$input = input;
    result$data['input'] = l$input.toJson();
    return result$data;
  }

  CopyWith$Variables$Mutation$CreateBook<Variables$Mutation$CreateBook>
      get copyWith => CopyWith$Variables$Mutation$CreateBook(
            this,
            (i) => i,
          );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$Mutation$CreateBook) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$input = input;
    final lOther$input = other.input;
    if (l$input != lOther$input) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$input = input;
    return Object.hashAll([l$input]);
  }
}

abstract class CopyWith$Variables$Mutation$CreateBook<TRes> {
  factory CopyWith$Variables$Mutation$CreateBook(
    Variables$Mutation$CreateBook instance,
    TRes Function(Variables$Mutation$CreateBook) then,
  ) = _CopyWithImpl$Variables$Mutation$CreateBook;

  factory CopyWith$Variables$Mutation$CreateBook.stub(TRes res) =
      _CopyWithStubImpl$Variables$Mutation$CreateBook;

  TRes call({Input$UpsertBookInput? input});
}

class _CopyWithImpl$Variables$Mutation$CreateBook<TRes>
    implements CopyWith$Variables$Mutation$CreateBook<TRes> {
  _CopyWithImpl$Variables$Mutation$CreateBook(
    this._instance,
    this._then,
  );

  final Variables$Mutation$CreateBook _instance;

  final TRes Function(Variables$Mutation$CreateBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({Object? input = _undefined}) =>
      _then(Variables$Mutation$CreateBook._({
        ..._instance._$data,
        if (input != _undefined && input != null)
          'input': (input as Input$UpsertBookInput),
      }));
}

class _CopyWithStubImpl$Variables$Mutation$CreateBook<TRes>
    implements CopyWith$Variables$Mutation$CreateBook<TRes> {
  _CopyWithStubImpl$Variables$Mutation$CreateBook(this._res);

  TRes _res;

  call({Input$UpsertBookInput? input}) => _res;
}

class Mutation$CreateBook {
  Mutation$CreateBook({
    required this.createBook,
    this.$__typename = 'Mutation',
  });

  factory Mutation$CreateBook.fromJson(Map<String, dynamic> json) {
    final l$createBook = json['createBook'];
    final l$$__typename = json['__typename'];
    return Mutation$CreateBook(
      createBook: Mutation$CreateBook$createBook.fromJson(
          (l$createBook as Map<String, dynamic>)),
      $__typename: (l$$__typename as String),
    );
  }

  final Mutation$CreateBook$createBook createBook;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$createBook = createBook;
    _resultData['createBook'] = l$createBook.toJson();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$createBook = createBook;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$createBook,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Mutation$CreateBook) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$createBook = createBook;
    final lOther$createBook = other.createBook;
    if (l$createBook != lOther$createBook) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Mutation$CreateBook on Mutation$CreateBook {
  CopyWith$Mutation$CreateBook<Mutation$CreateBook> get copyWith =>
      CopyWith$Mutation$CreateBook(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Mutation$CreateBook<TRes> {
  factory CopyWith$Mutation$CreateBook(
    Mutation$CreateBook instance,
    TRes Function(Mutation$CreateBook) then,
  ) = _CopyWithImpl$Mutation$CreateBook;

  factory CopyWith$Mutation$CreateBook.stub(TRes res) =
      _CopyWithStubImpl$Mutation$CreateBook;

  TRes call({
    Mutation$CreateBook$createBook? createBook,
    String? $__typename,
  });
  CopyWith$Mutation$CreateBook$createBook<TRes> get createBook;
}

class _CopyWithImpl$Mutation$CreateBook<TRes>
    implements CopyWith$Mutation$CreateBook<TRes> {
  _CopyWithImpl$Mutation$CreateBook(
    this._instance,
    this._then,
  );

  final Mutation$CreateBook _instance;

  final TRes Function(Mutation$CreateBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? createBook = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Mutation$CreateBook(
        createBook: createBook == _undefined || createBook == null
            ? _instance.createBook
            : (createBook as Mutation$CreateBook$createBook),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));

  CopyWith$Mutation$CreateBook$createBook<TRes> get createBook {
    final local$createBook = _instance.createBook;
    return CopyWith$Mutation$CreateBook$createBook(
        local$createBook, (e) => call(createBook: e));
  }
}

class _CopyWithStubImpl$Mutation$CreateBook<TRes>
    implements CopyWith$Mutation$CreateBook<TRes> {
  _CopyWithStubImpl$Mutation$CreateBook(this._res);

  TRes _res;

  call({
    Mutation$CreateBook$createBook? createBook,
    String? $__typename,
  }) =>
      _res;

  CopyWith$Mutation$CreateBook$createBook<TRes> get createBook =>
      CopyWith$Mutation$CreateBook$createBook.stub(_res);
}

const documentNodeMutationCreateBook = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.mutation,
    name: NameNode(value: 'CreateBook'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'input')),
        type: NamedTypeNode(
          name: NameNode(value: 'UpsertBookInput'),
          isNonNull: true,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      )
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'createBook'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'input'),
            value: VariableNode(name: NameNode(value: 'input')),
          )
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FieldNode(
            name: NameNode(value: 'id'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'title'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
]);
Mutation$CreateBook _parserFn$Mutation$CreateBook(Map<String, dynamic> data) =>
    Mutation$CreateBook.fromJson(data);
typedef OnMutationCompleted$Mutation$CreateBook = FutureOr<void> Function(
  Map<String, dynamic>?,
  Mutation$CreateBook?,
);

class Options$Mutation$CreateBook
    extends graphql.MutationOptions<Mutation$CreateBook> {
  Options$Mutation$CreateBook({
    String? operationName,
    required Variables$Mutation$CreateBook variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$CreateBook? typedOptimisticResult,
    graphql.Context? context,
    OnMutationCompleted$Mutation$CreateBook? onCompleted,
    graphql.OnMutationUpdate<Mutation$CreateBook>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$Mutation$CreateBook(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationCreateBook,
          parserFn: _parserFn$Mutation$CreateBook,
        );

  final OnMutationCompleted$Mutation$CreateBook? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

class WatchOptions$Mutation$CreateBook
    extends graphql.WatchQueryOptions<Mutation$CreateBook> {
  WatchOptions$Mutation$CreateBook({
    String? operationName,
    required Variables$Mutation$CreateBook variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$CreateBook? typedOptimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          document: documentNodeMutationCreateBook,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$Mutation$CreateBook,
        );
}

extension ClientExtension$Mutation$CreateBook on graphql.GraphQLClient {
  Future<graphql.QueryResult<Mutation$CreateBook>> mutate$CreateBook(
          Options$Mutation$CreateBook options) async =>
      await this.mutate(options);
  graphql.ObservableQuery<Mutation$CreateBook> watchMutation$CreateBook(
          WatchOptions$Mutation$CreateBook options) =>
      this.watchMutation(options);
}

class Mutation$CreateBook$HookResult {
  Mutation$CreateBook$HookResult(
    this.runMutation,
    this.result,
  );

  final RunMutation$Mutation$CreateBook runMutation;

  final graphql.QueryResult<Mutation$CreateBook> result;
}

Mutation$CreateBook$HookResult useMutation$CreateBook(
    [WidgetOptions$Mutation$CreateBook? options]) {
  final result = graphql_flutter
      .useMutation(options ?? WidgetOptions$Mutation$CreateBook());
  return Mutation$CreateBook$HookResult(
    (variables, {optimisticResult, typedOptimisticResult}) =>
        result.runMutation(
      variables.toJson(),
      optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
    ),
    result.result,
  );
}

graphql.ObservableQuery<Mutation$CreateBook> useWatchMutation$CreateBook(
        WatchOptions$Mutation$CreateBook options) =>
    graphql_flutter.useWatchMutation(options);

class WidgetOptions$Mutation$CreateBook
    extends graphql.MutationOptions<Mutation$CreateBook> {
  WidgetOptions$Mutation$CreateBook({
    String? operationName,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$CreateBook? typedOptimisticResult,
    graphql.Context? context,
    OnMutationCompleted$Mutation$CreateBook? onCompleted,
    graphql.OnMutationUpdate<Mutation$CreateBook>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$Mutation$CreateBook(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationCreateBook,
          parserFn: _parserFn$Mutation$CreateBook,
        );

  final OnMutationCompleted$Mutation$CreateBook? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

typedef RunMutation$Mutation$CreateBook
    = graphql.MultiSourceResult<Mutation$CreateBook> Function(
  Variables$Mutation$CreateBook, {
  Object? optimisticResult,
  Mutation$CreateBook? typedOptimisticResult,
});
typedef Builder$Mutation$CreateBook = widgets.Widget Function(
  RunMutation$Mutation$CreateBook,
  graphql.QueryResult<Mutation$CreateBook>?,
);

class Mutation$CreateBook$Widget
    extends graphql_flutter.Mutation<Mutation$CreateBook> {
  Mutation$CreateBook$Widget({
    widgets.Key? key,
    WidgetOptions$Mutation$CreateBook? options,
    required Builder$Mutation$CreateBook builder,
  }) : super(
          key: key,
          options: options ?? WidgetOptions$Mutation$CreateBook(),
          builder: (
            run,
            result,
          ) =>
              builder(
            (
              variables, {
              optimisticResult,
              typedOptimisticResult,
            }) =>
                run(
              variables.toJson(),
              optimisticResult:
                  optimisticResult ?? typedOptimisticResult?.toJson(),
            ),
            result,
          ),
        );
}

class Mutation$CreateBook$createBook {
  Mutation$CreateBook$createBook({
    required this.id,
    required this.title,
    required this.createdBy,
    required this.createdAt,
    required this.updatedBy,
    required this.updatedAt,
    this.$__typename = 'Book',
  });

  factory Mutation$CreateBook$createBook.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$title = json['title'];
    final l$createdBy = json['createdBy'];
    final l$createdAt = json['createdAt'];
    final l$updatedBy = json['updatedBy'];
    final l$updatedAt = json['updatedAt'];
    final l$$__typename = json['__typename'];
    return Mutation$CreateBook$createBook(
      id: (l$id as String),
      title: (l$title as String),
      createdBy: (l$createdBy as String),
      createdAt: (l$createdAt as String),
      updatedBy: (l$updatedBy as String),
      updatedAt: (l$updatedAt as String),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String title;

  final String createdBy;

  final String createdAt;

  final String updatedBy;

  final String updatedAt;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$title = title;
    _resultData['title'] = l$title;
    final l$createdBy = createdBy;
    _resultData['createdBy'] = l$createdBy;
    final l$createdAt = createdAt;
    _resultData['createdAt'] = l$createdAt;
    final l$updatedBy = updatedBy;
    _resultData['updatedBy'] = l$updatedBy;
    final l$updatedAt = updatedAt;
    _resultData['updatedAt'] = l$updatedAt;
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$title = title;
    final l$createdBy = createdBy;
    final l$createdAt = createdAt;
    final l$updatedBy = updatedBy;
    final l$updatedAt = updatedAt;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$title,
      l$createdBy,
      l$createdAt,
      l$updatedBy,
      l$updatedAt,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Mutation$CreateBook$createBook) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$createdBy = createdBy;
    final lOther$createdBy = other.createdBy;
    if (l$createdBy != lOther$createdBy) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$updatedBy = updatedBy;
    final lOther$updatedBy = other.updatedBy;
    if (l$updatedBy != lOther$updatedBy) {
      return false;
    }
    final l$updatedAt = updatedAt;
    final lOther$updatedAt = other.updatedAt;
    if (l$updatedAt != lOther$updatedAt) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Mutation$CreateBook$createBook
    on Mutation$CreateBook$createBook {
  CopyWith$Mutation$CreateBook$createBook<Mutation$CreateBook$createBook>
      get copyWith => CopyWith$Mutation$CreateBook$createBook(
            this,
            (i) => i,
          );
}

abstract class CopyWith$Mutation$CreateBook$createBook<TRes> {
  factory CopyWith$Mutation$CreateBook$createBook(
    Mutation$CreateBook$createBook instance,
    TRes Function(Mutation$CreateBook$createBook) then,
  ) = _CopyWithImpl$Mutation$CreateBook$createBook;

  factory CopyWith$Mutation$CreateBook$createBook.stub(TRes res) =
      _CopyWithStubImpl$Mutation$CreateBook$createBook;

  TRes call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  });
}

class _CopyWithImpl$Mutation$CreateBook$createBook<TRes>
    implements CopyWith$Mutation$CreateBook$createBook<TRes> {
  _CopyWithImpl$Mutation$CreateBook$createBook(
    this._instance,
    this._then,
  );

  final Mutation$CreateBook$createBook _instance;

  final TRes Function(Mutation$CreateBook$createBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? title = _undefined,
    Object? createdBy = _undefined,
    Object? createdAt = _undefined,
    Object? updatedBy = _undefined,
    Object? updatedAt = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Mutation$CreateBook$createBook(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        title: title == _undefined || title == null
            ? _instance.title
            : (title as String),
        createdBy: createdBy == _undefined || createdBy == null
            ? _instance.createdBy
            : (createdBy as String),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as String),
        updatedBy: updatedBy == _undefined || updatedBy == null
            ? _instance.updatedBy
            : (updatedBy as String),
        updatedAt: updatedAt == _undefined || updatedAt == null
            ? _instance.updatedAt
            : (updatedAt as String),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
}

class _CopyWithStubImpl$Mutation$CreateBook$createBook<TRes>
    implements CopyWith$Mutation$CreateBook$createBook<TRes> {
  _CopyWithStubImpl$Mutation$CreateBook$createBook(this._res);

  TRes _res;

  call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  }) =>
      _res;
}

class Variables$Mutation$UpdateBook {
  factory Variables$Mutation$UpdateBook({
    required String id,
    required Input$UpsertBookInput input,
  }) =>
      Variables$Mutation$UpdateBook._({
        r'id': id,
        r'input': input,
      });

  Variables$Mutation$UpdateBook._(this._$data);

  factory Variables$Mutation$UpdateBook.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$id = data['id'];
    result$data['id'] = (l$id as String);
    final l$input = data['input'];
    result$data['input'] =
        Input$UpsertBookInput.fromJson((l$input as Map<String, dynamic>));
    return Variables$Mutation$UpdateBook._(result$data);
  }

  Map<String, dynamic> _$data;

  String get id => (_$data['id'] as String);

  Input$UpsertBookInput get input => (_$data['input'] as Input$UpsertBookInput);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$id = id;
    result$data['id'] = l$id;
    final l$input = input;
    result$data['input'] = l$input.toJson();
    return result$data;
  }

  CopyWith$Variables$Mutation$UpdateBook<Variables$Mutation$UpdateBook>
      get copyWith => CopyWith$Variables$Mutation$UpdateBook(
            this,
            (i) => i,
          );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$Mutation$UpdateBook) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$input = input;
    final lOther$input = other.input;
    if (l$input != lOther$input) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$input = input;
    return Object.hashAll([
      l$id,
      l$input,
    ]);
  }
}

abstract class CopyWith$Variables$Mutation$UpdateBook<TRes> {
  factory CopyWith$Variables$Mutation$UpdateBook(
    Variables$Mutation$UpdateBook instance,
    TRes Function(Variables$Mutation$UpdateBook) then,
  ) = _CopyWithImpl$Variables$Mutation$UpdateBook;

  factory CopyWith$Variables$Mutation$UpdateBook.stub(TRes res) =
      _CopyWithStubImpl$Variables$Mutation$UpdateBook;

  TRes call({
    String? id,
    Input$UpsertBookInput? input,
  });
}

class _CopyWithImpl$Variables$Mutation$UpdateBook<TRes>
    implements CopyWith$Variables$Mutation$UpdateBook<TRes> {
  _CopyWithImpl$Variables$Mutation$UpdateBook(
    this._instance,
    this._then,
  );

  final Variables$Mutation$UpdateBook _instance;

  final TRes Function(Variables$Mutation$UpdateBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? input = _undefined,
  }) =>
      _then(Variables$Mutation$UpdateBook._({
        ..._instance._$data,
        if (id != _undefined && id != null) 'id': (id as String),
        if (input != _undefined && input != null)
          'input': (input as Input$UpsertBookInput),
      }));
}

class _CopyWithStubImpl$Variables$Mutation$UpdateBook<TRes>
    implements CopyWith$Variables$Mutation$UpdateBook<TRes> {
  _CopyWithStubImpl$Variables$Mutation$UpdateBook(this._res);

  TRes _res;

  call({
    String? id,
    Input$UpsertBookInput? input,
  }) =>
      _res;
}

class Mutation$UpdateBook {
  Mutation$UpdateBook({
    required this.updateBook,
    this.$__typename = 'Mutation',
  });

  factory Mutation$UpdateBook.fromJson(Map<String, dynamic> json) {
    final l$updateBook = json['updateBook'];
    final l$$__typename = json['__typename'];
    return Mutation$UpdateBook(
      updateBook: Mutation$UpdateBook$updateBook.fromJson(
          (l$updateBook as Map<String, dynamic>)),
      $__typename: (l$$__typename as String),
    );
  }

  final Mutation$UpdateBook$updateBook updateBook;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$updateBook = updateBook;
    _resultData['updateBook'] = l$updateBook.toJson();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$updateBook = updateBook;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$updateBook,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Mutation$UpdateBook) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$updateBook = updateBook;
    final lOther$updateBook = other.updateBook;
    if (l$updateBook != lOther$updateBook) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Mutation$UpdateBook on Mutation$UpdateBook {
  CopyWith$Mutation$UpdateBook<Mutation$UpdateBook> get copyWith =>
      CopyWith$Mutation$UpdateBook(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Mutation$UpdateBook<TRes> {
  factory CopyWith$Mutation$UpdateBook(
    Mutation$UpdateBook instance,
    TRes Function(Mutation$UpdateBook) then,
  ) = _CopyWithImpl$Mutation$UpdateBook;

  factory CopyWith$Mutation$UpdateBook.stub(TRes res) =
      _CopyWithStubImpl$Mutation$UpdateBook;

  TRes call({
    Mutation$UpdateBook$updateBook? updateBook,
    String? $__typename,
  });
  CopyWith$Mutation$UpdateBook$updateBook<TRes> get updateBook;
}

class _CopyWithImpl$Mutation$UpdateBook<TRes>
    implements CopyWith$Mutation$UpdateBook<TRes> {
  _CopyWithImpl$Mutation$UpdateBook(
    this._instance,
    this._then,
  );

  final Mutation$UpdateBook _instance;

  final TRes Function(Mutation$UpdateBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? updateBook = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Mutation$UpdateBook(
        updateBook: updateBook == _undefined || updateBook == null
            ? _instance.updateBook
            : (updateBook as Mutation$UpdateBook$updateBook),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));

  CopyWith$Mutation$UpdateBook$updateBook<TRes> get updateBook {
    final local$updateBook = _instance.updateBook;
    return CopyWith$Mutation$UpdateBook$updateBook(
        local$updateBook, (e) => call(updateBook: e));
  }
}

class _CopyWithStubImpl$Mutation$UpdateBook<TRes>
    implements CopyWith$Mutation$UpdateBook<TRes> {
  _CopyWithStubImpl$Mutation$UpdateBook(this._res);

  TRes _res;

  call({
    Mutation$UpdateBook$updateBook? updateBook,
    String? $__typename,
  }) =>
      _res;

  CopyWith$Mutation$UpdateBook$updateBook<TRes> get updateBook =>
      CopyWith$Mutation$UpdateBook$updateBook.stub(_res);
}

const documentNodeMutationUpdateBook = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.mutation,
    name: NameNode(value: 'UpdateBook'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'id')),
        type: NamedTypeNode(
          name: NameNode(value: 'BigInt'),
          isNonNull: true,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      ),
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'input')),
        type: NamedTypeNode(
          name: NameNode(value: 'UpsertBookInput'),
          isNonNull: true,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      ),
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'updateBook'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'id'),
            value: VariableNode(name: NameNode(value: 'id')),
          ),
          ArgumentNode(
            name: NameNode(value: 'input'),
            value: VariableNode(name: NameNode(value: 'input')),
          ),
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FieldNode(
            name: NameNode(value: 'id'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'title'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
]);
Mutation$UpdateBook _parserFn$Mutation$UpdateBook(Map<String, dynamic> data) =>
    Mutation$UpdateBook.fromJson(data);
typedef OnMutationCompleted$Mutation$UpdateBook = FutureOr<void> Function(
  Map<String, dynamic>?,
  Mutation$UpdateBook?,
);

class Options$Mutation$UpdateBook
    extends graphql.MutationOptions<Mutation$UpdateBook> {
  Options$Mutation$UpdateBook({
    String? operationName,
    required Variables$Mutation$UpdateBook variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$UpdateBook? typedOptimisticResult,
    graphql.Context? context,
    OnMutationCompleted$Mutation$UpdateBook? onCompleted,
    graphql.OnMutationUpdate<Mutation$UpdateBook>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$Mutation$UpdateBook(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationUpdateBook,
          parserFn: _parserFn$Mutation$UpdateBook,
        );

  final OnMutationCompleted$Mutation$UpdateBook? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

class WatchOptions$Mutation$UpdateBook
    extends graphql.WatchQueryOptions<Mutation$UpdateBook> {
  WatchOptions$Mutation$UpdateBook({
    String? operationName,
    required Variables$Mutation$UpdateBook variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$UpdateBook? typedOptimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          document: documentNodeMutationUpdateBook,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$Mutation$UpdateBook,
        );
}

extension ClientExtension$Mutation$UpdateBook on graphql.GraphQLClient {
  Future<graphql.QueryResult<Mutation$UpdateBook>> mutate$UpdateBook(
          Options$Mutation$UpdateBook options) async =>
      await this.mutate(options);
  graphql.ObservableQuery<Mutation$UpdateBook> watchMutation$UpdateBook(
          WatchOptions$Mutation$UpdateBook options) =>
      this.watchMutation(options);
}

class Mutation$UpdateBook$HookResult {
  Mutation$UpdateBook$HookResult(
    this.runMutation,
    this.result,
  );

  final RunMutation$Mutation$UpdateBook runMutation;

  final graphql.QueryResult<Mutation$UpdateBook> result;
}

Mutation$UpdateBook$HookResult useMutation$UpdateBook(
    [WidgetOptions$Mutation$UpdateBook? options]) {
  final result = graphql_flutter
      .useMutation(options ?? WidgetOptions$Mutation$UpdateBook());
  return Mutation$UpdateBook$HookResult(
    (variables, {optimisticResult, typedOptimisticResult}) =>
        result.runMutation(
      variables.toJson(),
      optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
    ),
    result.result,
  );
}

graphql.ObservableQuery<Mutation$UpdateBook> useWatchMutation$UpdateBook(
        WatchOptions$Mutation$UpdateBook options) =>
    graphql_flutter.useWatchMutation(options);

class WidgetOptions$Mutation$UpdateBook
    extends graphql.MutationOptions<Mutation$UpdateBook> {
  WidgetOptions$Mutation$UpdateBook({
    String? operationName,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$UpdateBook? typedOptimisticResult,
    graphql.Context? context,
    OnMutationCompleted$Mutation$UpdateBook? onCompleted,
    graphql.OnMutationUpdate<Mutation$UpdateBook>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$Mutation$UpdateBook(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationUpdateBook,
          parserFn: _parserFn$Mutation$UpdateBook,
        );

  final OnMutationCompleted$Mutation$UpdateBook? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

typedef RunMutation$Mutation$UpdateBook
    = graphql.MultiSourceResult<Mutation$UpdateBook> Function(
  Variables$Mutation$UpdateBook, {
  Object? optimisticResult,
  Mutation$UpdateBook? typedOptimisticResult,
});
typedef Builder$Mutation$UpdateBook = widgets.Widget Function(
  RunMutation$Mutation$UpdateBook,
  graphql.QueryResult<Mutation$UpdateBook>?,
);

class Mutation$UpdateBook$Widget
    extends graphql_flutter.Mutation<Mutation$UpdateBook> {
  Mutation$UpdateBook$Widget({
    widgets.Key? key,
    WidgetOptions$Mutation$UpdateBook? options,
    required Builder$Mutation$UpdateBook builder,
  }) : super(
          key: key,
          options: options ?? WidgetOptions$Mutation$UpdateBook(),
          builder: (
            run,
            result,
          ) =>
              builder(
            (
              variables, {
              optimisticResult,
              typedOptimisticResult,
            }) =>
                run(
              variables.toJson(),
              optimisticResult:
                  optimisticResult ?? typedOptimisticResult?.toJson(),
            ),
            result,
          ),
        );
}

class Mutation$UpdateBook$updateBook {
  Mutation$UpdateBook$updateBook({
    required this.id,
    required this.title,
    required this.createdBy,
    required this.createdAt,
    required this.updatedBy,
    required this.updatedAt,
    this.$__typename = 'Book',
  });

  factory Mutation$UpdateBook$updateBook.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$title = json['title'];
    final l$createdBy = json['createdBy'];
    final l$createdAt = json['createdAt'];
    final l$updatedBy = json['updatedBy'];
    final l$updatedAt = json['updatedAt'];
    final l$$__typename = json['__typename'];
    return Mutation$UpdateBook$updateBook(
      id: (l$id as String),
      title: (l$title as String),
      createdBy: (l$createdBy as String),
      createdAt: (l$createdAt as String),
      updatedBy: (l$updatedBy as String),
      updatedAt: (l$updatedAt as String),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String title;

  final String createdBy;

  final String createdAt;

  final String updatedBy;

  final String updatedAt;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$title = title;
    _resultData['title'] = l$title;
    final l$createdBy = createdBy;
    _resultData['createdBy'] = l$createdBy;
    final l$createdAt = createdAt;
    _resultData['createdAt'] = l$createdAt;
    final l$updatedBy = updatedBy;
    _resultData['updatedBy'] = l$updatedBy;
    final l$updatedAt = updatedAt;
    _resultData['updatedAt'] = l$updatedAt;
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$title = title;
    final l$createdBy = createdBy;
    final l$createdAt = createdAt;
    final l$updatedBy = updatedBy;
    final l$updatedAt = updatedAt;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$title,
      l$createdBy,
      l$createdAt,
      l$updatedBy,
      l$updatedAt,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Mutation$UpdateBook$updateBook) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$createdBy = createdBy;
    final lOther$createdBy = other.createdBy;
    if (l$createdBy != lOther$createdBy) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$updatedBy = updatedBy;
    final lOther$updatedBy = other.updatedBy;
    if (l$updatedBy != lOther$updatedBy) {
      return false;
    }
    final l$updatedAt = updatedAt;
    final lOther$updatedAt = other.updatedAt;
    if (l$updatedAt != lOther$updatedAt) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Mutation$UpdateBook$updateBook
    on Mutation$UpdateBook$updateBook {
  CopyWith$Mutation$UpdateBook$updateBook<Mutation$UpdateBook$updateBook>
      get copyWith => CopyWith$Mutation$UpdateBook$updateBook(
            this,
            (i) => i,
          );
}

abstract class CopyWith$Mutation$UpdateBook$updateBook<TRes> {
  factory CopyWith$Mutation$UpdateBook$updateBook(
    Mutation$UpdateBook$updateBook instance,
    TRes Function(Mutation$UpdateBook$updateBook) then,
  ) = _CopyWithImpl$Mutation$UpdateBook$updateBook;

  factory CopyWith$Mutation$UpdateBook$updateBook.stub(TRes res) =
      _CopyWithStubImpl$Mutation$UpdateBook$updateBook;

  TRes call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  });
}

class _CopyWithImpl$Mutation$UpdateBook$updateBook<TRes>
    implements CopyWith$Mutation$UpdateBook$updateBook<TRes> {
  _CopyWithImpl$Mutation$UpdateBook$updateBook(
    this._instance,
    this._then,
  );

  final Mutation$UpdateBook$updateBook _instance;

  final TRes Function(Mutation$UpdateBook$updateBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? title = _undefined,
    Object? createdBy = _undefined,
    Object? createdAt = _undefined,
    Object? updatedBy = _undefined,
    Object? updatedAt = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Mutation$UpdateBook$updateBook(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        title: title == _undefined || title == null
            ? _instance.title
            : (title as String),
        createdBy: createdBy == _undefined || createdBy == null
            ? _instance.createdBy
            : (createdBy as String),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as String),
        updatedBy: updatedBy == _undefined || updatedBy == null
            ? _instance.updatedBy
            : (updatedBy as String),
        updatedAt: updatedAt == _undefined || updatedAt == null
            ? _instance.updatedAt
            : (updatedAt as String),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
}

class _CopyWithStubImpl$Mutation$UpdateBook$updateBook<TRes>
    implements CopyWith$Mutation$UpdateBook$updateBook<TRes> {
  _CopyWithStubImpl$Mutation$UpdateBook$updateBook(this._res);

  TRes _res;

  call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  }) =>
      _res;
}

class Variables$Mutation$DeleteBook {
  factory Variables$Mutation$DeleteBook({required String id}) =>
      Variables$Mutation$DeleteBook._({
        r'id': id,
      });

  Variables$Mutation$DeleteBook._(this._$data);

  factory Variables$Mutation$DeleteBook.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$id = data['id'];
    result$data['id'] = (l$id as String);
    return Variables$Mutation$DeleteBook._(result$data);
  }

  Map<String, dynamic> _$data;

  String get id => (_$data['id'] as String);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$id = id;
    result$data['id'] = l$id;
    return result$data;
  }

  CopyWith$Variables$Mutation$DeleteBook<Variables$Mutation$DeleteBook>
      get copyWith => CopyWith$Variables$Mutation$DeleteBook(
            this,
            (i) => i,
          );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$Mutation$DeleteBook) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$id = id;
    return Object.hashAll([l$id]);
  }
}

abstract class CopyWith$Variables$Mutation$DeleteBook<TRes> {
  factory CopyWith$Variables$Mutation$DeleteBook(
    Variables$Mutation$DeleteBook instance,
    TRes Function(Variables$Mutation$DeleteBook) then,
  ) = _CopyWithImpl$Variables$Mutation$DeleteBook;

  factory CopyWith$Variables$Mutation$DeleteBook.stub(TRes res) =
      _CopyWithStubImpl$Variables$Mutation$DeleteBook;

  TRes call({String? id});
}

class _CopyWithImpl$Variables$Mutation$DeleteBook<TRes>
    implements CopyWith$Variables$Mutation$DeleteBook<TRes> {
  _CopyWithImpl$Variables$Mutation$DeleteBook(
    this._instance,
    this._then,
  );

  final Variables$Mutation$DeleteBook _instance;

  final TRes Function(Variables$Mutation$DeleteBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({Object? id = _undefined}) =>
      _then(Variables$Mutation$DeleteBook._({
        ..._instance._$data,
        if (id != _undefined && id != null) 'id': (id as String),
      }));
}

class _CopyWithStubImpl$Variables$Mutation$DeleteBook<TRes>
    implements CopyWith$Variables$Mutation$DeleteBook<TRes> {
  _CopyWithStubImpl$Variables$Mutation$DeleteBook(this._res);

  TRes _res;

  call({String? id}) => _res;
}

class Mutation$DeleteBook {
  Mutation$DeleteBook({
    required this.deleteBook,
    this.$__typename = 'Mutation',
  });

  factory Mutation$DeleteBook.fromJson(Map<String, dynamic> json) {
    final l$deleteBook = json['deleteBook'];
    final l$$__typename = json['__typename'];
    return Mutation$DeleteBook(
      deleteBook: Mutation$DeleteBook$deleteBook.fromJson(
          (l$deleteBook as Map<String, dynamic>)),
      $__typename: (l$$__typename as String),
    );
  }

  final Mutation$DeleteBook$deleteBook deleteBook;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$deleteBook = deleteBook;
    _resultData['deleteBook'] = l$deleteBook.toJson();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$deleteBook = deleteBook;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$deleteBook,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Mutation$DeleteBook) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$deleteBook = deleteBook;
    final lOther$deleteBook = other.deleteBook;
    if (l$deleteBook != lOther$deleteBook) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Mutation$DeleteBook on Mutation$DeleteBook {
  CopyWith$Mutation$DeleteBook<Mutation$DeleteBook> get copyWith =>
      CopyWith$Mutation$DeleteBook(
        this,
        (i) => i,
      );
}

abstract class CopyWith$Mutation$DeleteBook<TRes> {
  factory CopyWith$Mutation$DeleteBook(
    Mutation$DeleteBook instance,
    TRes Function(Mutation$DeleteBook) then,
  ) = _CopyWithImpl$Mutation$DeleteBook;

  factory CopyWith$Mutation$DeleteBook.stub(TRes res) =
      _CopyWithStubImpl$Mutation$DeleteBook;

  TRes call({
    Mutation$DeleteBook$deleteBook? deleteBook,
    String? $__typename,
  });
  CopyWith$Mutation$DeleteBook$deleteBook<TRes> get deleteBook;
}

class _CopyWithImpl$Mutation$DeleteBook<TRes>
    implements CopyWith$Mutation$DeleteBook<TRes> {
  _CopyWithImpl$Mutation$DeleteBook(
    this._instance,
    this._then,
  );

  final Mutation$DeleteBook _instance;

  final TRes Function(Mutation$DeleteBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? deleteBook = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Mutation$DeleteBook(
        deleteBook: deleteBook == _undefined || deleteBook == null
            ? _instance.deleteBook
            : (deleteBook as Mutation$DeleteBook$deleteBook),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));

  CopyWith$Mutation$DeleteBook$deleteBook<TRes> get deleteBook {
    final local$deleteBook = _instance.deleteBook;
    return CopyWith$Mutation$DeleteBook$deleteBook(
        local$deleteBook, (e) => call(deleteBook: e));
  }
}

class _CopyWithStubImpl$Mutation$DeleteBook<TRes>
    implements CopyWith$Mutation$DeleteBook<TRes> {
  _CopyWithStubImpl$Mutation$DeleteBook(this._res);

  TRes _res;

  call({
    Mutation$DeleteBook$deleteBook? deleteBook,
    String? $__typename,
  }) =>
      _res;

  CopyWith$Mutation$DeleteBook$deleteBook<TRes> get deleteBook =>
      CopyWith$Mutation$DeleteBook$deleteBook.stub(_res);
}

const documentNodeMutationDeleteBook = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.mutation,
    name: NameNode(value: 'DeleteBook'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'id')),
        type: NamedTypeNode(
          name: NameNode(value: 'BigInt'),
          isNonNull: true,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      )
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'deleteBook'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'id'),
            value: VariableNode(name: NameNode(value: 'id')),
          )
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FieldNode(
            name: NameNode(value: 'id'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'title'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'createdAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedBy'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: 'updatedAt'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
]);
Mutation$DeleteBook _parserFn$Mutation$DeleteBook(Map<String, dynamic> data) =>
    Mutation$DeleteBook.fromJson(data);
typedef OnMutationCompleted$Mutation$DeleteBook = FutureOr<void> Function(
  Map<String, dynamic>?,
  Mutation$DeleteBook?,
);

class Options$Mutation$DeleteBook
    extends graphql.MutationOptions<Mutation$DeleteBook> {
  Options$Mutation$DeleteBook({
    String? operationName,
    required Variables$Mutation$DeleteBook variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$DeleteBook? typedOptimisticResult,
    graphql.Context? context,
    OnMutationCompleted$Mutation$DeleteBook? onCompleted,
    graphql.OnMutationUpdate<Mutation$DeleteBook>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$Mutation$DeleteBook(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationDeleteBook,
          parserFn: _parserFn$Mutation$DeleteBook,
        );

  final OnMutationCompleted$Mutation$DeleteBook? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

class WatchOptions$Mutation$DeleteBook
    extends graphql.WatchQueryOptions<Mutation$DeleteBook> {
  WatchOptions$Mutation$DeleteBook({
    String? operationName,
    required Variables$Mutation$DeleteBook variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$DeleteBook? typedOptimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          document: documentNodeMutationDeleteBook,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$Mutation$DeleteBook,
        );
}

extension ClientExtension$Mutation$DeleteBook on graphql.GraphQLClient {
  Future<graphql.QueryResult<Mutation$DeleteBook>> mutate$DeleteBook(
          Options$Mutation$DeleteBook options) async =>
      await this.mutate(options);
  graphql.ObservableQuery<Mutation$DeleteBook> watchMutation$DeleteBook(
          WatchOptions$Mutation$DeleteBook options) =>
      this.watchMutation(options);
}

class Mutation$DeleteBook$HookResult {
  Mutation$DeleteBook$HookResult(
    this.runMutation,
    this.result,
  );

  final RunMutation$Mutation$DeleteBook runMutation;

  final graphql.QueryResult<Mutation$DeleteBook> result;
}

Mutation$DeleteBook$HookResult useMutation$DeleteBook(
    [WidgetOptions$Mutation$DeleteBook? options]) {
  final result = graphql_flutter
      .useMutation(options ?? WidgetOptions$Mutation$DeleteBook());
  return Mutation$DeleteBook$HookResult(
    (variables, {optimisticResult, typedOptimisticResult}) =>
        result.runMutation(
      variables.toJson(),
      optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
    ),
    result.result,
  );
}

graphql.ObservableQuery<Mutation$DeleteBook> useWatchMutation$DeleteBook(
        WatchOptions$Mutation$DeleteBook options) =>
    graphql_flutter.useWatchMutation(options);

class WidgetOptions$Mutation$DeleteBook
    extends graphql.MutationOptions<Mutation$DeleteBook> {
  WidgetOptions$Mutation$DeleteBook({
    String? operationName,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Mutation$DeleteBook? typedOptimisticResult,
    graphql.Context? context,
    OnMutationCompleted$Mutation$DeleteBook? onCompleted,
    graphql.OnMutationUpdate<Mutation$DeleteBook>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult ?? typedOptimisticResult?.toJson(),
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$Mutation$DeleteBook(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationDeleteBook,
          parserFn: _parserFn$Mutation$DeleteBook,
        );

  final OnMutationCompleted$Mutation$DeleteBook? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

typedef RunMutation$Mutation$DeleteBook
    = graphql.MultiSourceResult<Mutation$DeleteBook> Function(
  Variables$Mutation$DeleteBook, {
  Object? optimisticResult,
  Mutation$DeleteBook? typedOptimisticResult,
});
typedef Builder$Mutation$DeleteBook = widgets.Widget Function(
  RunMutation$Mutation$DeleteBook,
  graphql.QueryResult<Mutation$DeleteBook>?,
);

class Mutation$DeleteBook$Widget
    extends graphql_flutter.Mutation<Mutation$DeleteBook> {
  Mutation$DeleteBook$Widget({
    widgets.Key? key,
    WidgetOptions$Mutation$DeleteBook? options,
    required Builder$Mutation$DeleteBook builder,
  }) : super(
          key: key,
          options: options ?? WidgetOptions$Mutation$DeleteBook(),
          builder: (
            run,
            result,
          ) =>
              builder(
            (
              variables, {
              optimisticResult,
              typedOptimisticResult,
            }) =>
                run(
              variables.toJson(),
              optimisticResult:
                  optimisticResult ?? typedOptimisticResult?.toJson(),
            ),
            result,
          ),
        );
}

class Mutation$DeleteBook$deleteBook {
  Mutation$DeleteBook$deleteBook({
    required this.id,
    required this.title,
    required this.createdBy,
    required this.createdAt,
    required this.updatedBy,
    required this.updatedAt,
    this.$__typename = 'Book',
  });

  factory Mutation$DeleteBook$deleteBook.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$title = json['title'];
    final l$createdBy = json['createdBy'];
    final l$createdAt = json['createdAt'];
    final l$updatedBy = json['updatedBy'];
    final l$updatedAt = json['updatedAt'];
    final l$$__typename = json['__typename'];
    return Mutation$DeleteBook$deleteBook(
      id: (l$id as String),
      title: (l$title as String),
      createdBy: (l$createdBy as String),
      createdAt: (l$createdAt as String),
      updatedBy: (l$updatedBy as String),
      updatedAt: (l$updatedAt as String),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String title;

  final String createdBy;

  final String createdAt;

  final String updatedBy;

  final String updatedAt;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$title = title;
    _resultData['title'] = l$title;
    final l$createdBy = createdBy;
    _resultData['createdBy'] = l$createdBy;
    final l$createdAt = createdAt;
    _resultData['createdAt'] = l$createdAt;
    final l$updatedBy = updatedBy;
    _resultData['updatedBy'] = l$updatedBy;
    final l$updatedAt = updatedAt;
    _resultData['updatedAt'] = l$updatedAt;
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$title = title;
    final l$createdBy = createdBy;
    final l$createdAt = createdAt;
    final l$updatedBy = updatedBy;
    final l$updatedAt = updatedAt;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$title,
      l$createdBy,
      l$createdAt,
      l$updatedBy,
      l$updatedAt,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Mutation$DeleteBook$deleteBook) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$createdBy = createdBy;
    final lOther$createdBy = other.createdBy;
    if (l$createdBy != lOther$createdBy) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$updatedBy = updatedBy;
    final lOther$updatedBy = other.updatedBy;
    if (l$updatedBy != lOther$updatedBy) {
      return false;
    }
    final l$updatedAt = updatedAt;
    final lOther$updatedAt = other.updatedAt;
    if (l$updatedAt != lOther$updatedAt) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$Mutation$DeleteBook$deleteBook
    on Mutation$DeleteBook$deleteBook {
  CopyWith$Mutation$DeleteBook$deleteBook<Mutation$DeleteBook$deleteBook>
      get copyWith => CopyWith$Mutation$DeleteBook$deleteBook(
            this,
            (i) => i,
          );
}

abstract class CopyWith$Mutation$DeleteBook$deleteBook<TRes> {
  factory CopyWith$Mutation$DeleteBook$deleteBook(
    Mutation$DeleteBook$deleteBook instance,
    TRes Function(Mutation$DeleteBook$deleteBook) then,
  ) = _CopyWithImpl$Mutation$DeleteBook$deleteBook;

  factory CopyWith$Mutation$DeleteBook$deleteBook.stub(TRes res) =
      _CopyWithStubImpl$Mutation$DeleteBook$deleteBook;

  TRes call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  });
}

class _CopyWithImpl$Mutation$DeleteBook$deleteBook<TRes>
    implements CopyWith$Mutation$DeleteBook$deleteBook<TRes> {
  _CopyWithImpl$Mutation$DeleteBook$deleteBook(
    this._instance,
    this._then,
  );

  final Mutation$DeleteBook$deleteBook _instance;

  final TRes Function(Mutation$DeleteBook$deleteBook) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? id = _undefined,
    Object? title = _undefined,
    Object? createdBy = _undefined,
    Object? createdAt = _undefined,
    Object? updatedBy = _undefined,
    Object? updatedAt = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(Mutation$DeleteBook$deleteBook(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        title: title == _undefined || title == null
            ? _instance.title
            : (title as String),
        createdBy: createdBy == _undefined || createdBy == null
            ? _instance.createdBy
            : (createdBy as String),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as String),
        updatedBy: updatedBy == _undefined || updatedBy == null
            ? _instance.updatedBy
            : (updatedBy as String),
        updatedAt: updatedAt == _undefined || updatedAt == null
            ? _instance.updatedAt
            : (updatedAt as String),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
}

class _CopyWithStubImpl$Mutation$DeleteBook$deleteBook<TRes>
    implements CopyWith$Mutation$DeleteBook$deleteBook<TRes> {
  _CopyWithStubImpl$Mutation$DeleteBook$deleteBook(this._res);

  TRes _res;

  call({
    String? id,
    String? title,
    String? createdBy,
    String? createdAt,
    String? updatedBy,
    String? updatedAt,
    String? $__typename,
  }) =>
      _res;
}
