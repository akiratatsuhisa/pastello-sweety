class Input$ChaptersFilter {
  factory Input$ChaptersFilter({
    int? limit,
    int? skip,
  }) =>
      Input$ChaptersFilter._({
        if (limit != null) r'limit': limit,
        if (skip != null) r'skip': skip,
      });

  Input$ChaptersFilter._(this._$data);

  factory Input$ChaptersFilter.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    if (data.containsKey('limit')) {
      final l$limit = data['limit'];
      result$data['limit'] = (l$limit as int?);
    }
    if (data.containsKey('skip')) {
      final l$skip = data['skip'];
      result$data['skip'] = (l$skip as int?);
    }
    return Input$ChaptersFilter._(result$data);
  }

  Map<String, dynamic> _$data;

  int? get limit => (_$data['limit'] as int?);

  int? get skip => (_$data['skip'] as int?);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    if (_$data.containsKey('limit')) {
      final l$limit = limit;
      result$data['limit'] = l$limit;
    }
    if (_$data.containsKey('skip')) {
      final l$skip = skip;
      result$data['skip'] = l$skip;
    }
    return result$data;
  }

  CopyWith$Input$ChaptersFilter<Input$ChaptersFilter> get copyWith =>
      CopyWith$Input$ChaptersFilter(
        this,
        (i) => i,
      );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Input$ChaptersFilter) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$limit = limit;
    final lOther$limit = other.limit;
    if (_$data.containsKey('limit') != other._$data.containsKey('limit')) {
      return false;
    }
    if (l$limit != lOther$limit) {
      return false;
    }
    final l$skip = skip;
    final lOther$skip = other.skip;
    if (_$data.containsKey('skip') != other._$data.containsKey('skip')) {
      return false;
    }
    if (l$skip != lOther$skip) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$limit = limit;
    final l$skip = skip;
    return Object.hashAll([
      _$data.containsKey('limit') ? l$limit : const {},
      _$data.containsKey('skip') ? l$skip : const {},
    ]);
  }
}

abstract class CopyWith$Input$ChaptersFilter<TRes> {
  factory CopyWith$Input$ChaptersFilter(
    Input$ChaptersFilter instance,
    TRes Function(Input$ChaptersFilter) then,
  ) = _CopyWithImpl$Input$ChaptersFilter;

  factory CopyWith$Input$ChaptersFilter.stub(TRes res) =
      _CopyWithStubImpl$Input$ChaptersFilter;

  TRes call({
    int? limit,
    int? skip,
  });
}

class _CopyWithImpl$Input$ChaptersFilter<TRes>
    implements CopyWith$Input$ChaptersFilter<TRes> {
  _CopyWithImpl$Input$ChaptersFilter(
    this._instance,
    this._then,
  );

  final Input$ChaptersFilter _instance;

  final TRes Function(Input$ChaptersFilter) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? limit = _undefined,
    Object? skip = _undefined,
  }) =>
      _then(Input$ChaptersFilter._({
        ..._instance._$data,
        if (limit != _undefined) 'limit': (limit as int?),
        if (skip != _undefined) 'skip': (skip as int?),
      }));
}

class _CopyWithStubImpl$Input$ChaptersFilter<TRes>
    implements CopyWith$Input$ChaptersFilter<TRes> {
  _CopyWithStubImpl$Input$ChaptersFilter(this._res);

  TRes _res;

  call({
    int? limit,
    int? skip,
  }) =>
      _res;
}

class Input$BooksFilter {
  factory Input$BooksFilter({
    int? limit,
    int? skip,
  }) =>
      Input$BooksFilter._({
        if (limit != null) r'limit': limit,
        if (skip != null) r'skip': skip,
      });

  Input$BooksFilter._(this._$data);

  factory Input$BooksFilter.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    if (data.containsKey('limit')) {
      final l$limit = data['limit'];
      result$data['limit'] = (l$limit as int?);
    }
    if (data.containsKey('skip')) {
      final l$skip = data['skip'];
      result$data['skip'] = (l$skip as int?);
    }
    return Input$BooksFilter._(result$data);
  }

  Map<String, dynamic> _$data;

  int? get limit => (_$data['limit'] as int?);

  int? get skip => (_$data['skip'] as int?);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    if (_$data.containsKey('limit')) {
      final l$limit = limit;
      result$data['limit'] = l$limit;
    }
    if (_$data.containsKey('skip')) {
      final l$skip = skip;
      result$data['skip'] = l$skip;
    }
    return result$data;
  }

  CopyWith$Input$BooksFilter<Input$BooksFilter> get copyWith =>
      CopyWith$Input$BooksFilter(
        this,
        (i) => i,
      );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Input$BooksFilter) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$limit = limit;
    final lOther$limit = other.limit;
    if (_$data.containsKey('limit') != other._$data.containsKey('limit')) {
      return false;
    }
    if (l$limit != lOther$limit) {
      return false;
    }
    final l$skip = skip;
    final lOther$skip = other.skip;
    if (_$data.containsKey('skip') != other._$data.containsKey('skip')) {
      return false;
    }
    if (l$skip != lOther$skip) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$limit = limit;
    final l$skip = skip;
    return Object.hashAll([
      _$data.containsKey('limit') ? l$limit : const {},
      _$data.containsKey('skip') ? l$skip : const {},
    ]);
  }
}

abstract class CopyWith$Input$BooksFilter<TRes> {
  factory CopyWith$Input$BooksFilter(
    Input$BooksFilter instance,
    TRes Function(Input$BooksFilter) then,
  ) = _CopyWithImpl$Input$BooksFilter;

  factory CopyWith$Input$BooksFilter.stub(TRes res) =
      _CopyWithStubImpl$Input$BooksFilter;

  TRes call({
    int? limit,
    int? skip,
  });
}

class _CopyWithImpl$Input$BooksFilter<TRes>
    implements CopyWith$Input$BooksFilter<TRes> {
  _CopyWithImpl$Input$BooksFilter(
    this._instance,
    this._then,
  );

  final Input$BooksFilter _instance;

  final TRes Function(Input$BooksFilter) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? limit = _undefined,
    Object? skip = _undefined,
  }) =>
      _then(Input$BooksFilter._({
        ..._instance._$data,
        if (limit != _undefined) 'limit': (limit as int?),
        if (skip != _undefined) 'skip': (skip as int?),
      }));
}

class _CopyWithStubImpl$Input$BooksFilter<TRes>
    implements CopyWith$Input$BooksFilter<TRes> {
  _CopyWithStubImpl$Input$BooksFilter(this._res);

  TRes _res;

  call({
    int? limit,
    int? skip,
  }) =>
      _res;
}

class Input$UpsertBookInput {
  factory Input$UpsertBookInput({required String title}) =>
      Input$UpsertBookInput._({
        r'title': title,
      });

  Input$UpsertBookInput._(this._$data);

  factory Input$UpsertBookInput.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$title = data['title'];
    result$data['title'] = (l$title as String);
    return Input$UpsertBookInput._(result$data);
  }

  Map<String, dynamic> _$data;

  String get title => (_$data['title'] as String);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$title = title;
    result$data['title'] = l$title;
    return result$data;
  }

  CopyWith$Input$UpsertBookInput<Input$UpsertBookInput> get copyWith =>
      CopyWith$Input$UpsertBookInput(
        this,
        (i) => i,
      );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Input$UpsertBookInput) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$title = title;
    return Object.hashAll([l$title]);
  }
}

abstract class CopyWith$Input$UpsertBookInput<TRes> {
  factory CopyWith$Input$UpsertBookInput(
    Input$UpsertBookInput instance,
    TRes Function(Input$UpsertBookInput) then,
  ) = _CopyWithImpl$Input$UpsertBookInput;

  factory CopyWith$Input$UpsertBookInput.stub(TRes res) =
      _CopyWithStubImpl$Input$UpsertBookInput;

  TRes call({String? title});
}

class _CopyWithImpl$Input$UpsertBookInput<TRes>
    implements CopyWith$Input$UpsertBookInput<TRes> {
  _CopyWithImpl$Input$UpsertBookInput(
    this._instance,
    this._then,
  );

  final Input$UpsertBookInput _instance;

  final TRes Function(Input$UpsertBookInput) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({Object? title = _undefined}) => _then(Input$UpsertBookInput._({
        ..._instance._$data,
        if (title != _undefined && title != null) 'title': (title as String),
      }));
}

class _CopyWithStubImpl$Input$UpsertBookInput<TRes>
    implements CopyWith$Input$UpsertBookInput<TRes> {
  _CopyWithStubImpl$Input$UpsertBookInput(this._res);

  TRes _res;

  call({String? title}) => _res;
}

class Input$UpsertChapterInput {
  factory Input$UpsertChapterInput({
    required String title,
    required String bookId,
  }) =>
      Input$UpsertChapterInput._({
        r'title': title,
        r'bookId': bookId,
      });

  Input$UpsertChapterInput._(this._$data);

  factory Input$UpsertChapterInput.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$title = data['title'];
    result$data['title'] = (l$title as String);
    final l$bookId = data['bookId'];
    result$data['bookId'] = (l$bookId as String);
    return Input$UpsertChapterInput._(result$data);
  }

  Map<String, dynamic> _$data;

  String get title => (_$data['title'] as String);

  String get bookId => (_$data['bookId'] as String);

  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$title = title;
    result$data['title'] = l$title;
    final l$bookId = bookId;
    result$data['bookId'] = l$bookId;
    return result$data;
  }

  CopyWith$Input$UpsertChapterInput<Input$UpsertChapterInput> get copyWith =>
      CopyWith$Input$UpsertChapterInput(
        this,
        (i) => i,
      );

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Input$UpsertChapterInput) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$title = title;
    final lOther$title = other.title;
    if (l$title != lOther$title) {
      return false;
    }
    final l$bookId = bookId;
    final lOther$bookId = other.bookId;
    if (l$bookId != lOther$bookId) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$title = title;
    final l$bookId = bookId;
    return Object.hashAll([
      l$title,
      l$bookId,
    ]);
  }
}

abstract class CopyWith$Input$UpsertChapterInput<TRes> {
  factory CopyWith$Input$UpsertChapterInput(
    Input$UpsertChapterInput instance,
    TRes Function(Input$UpsertChapterInput) then,
  ) = _CopyWithImpl$Input$UpsertChapterInput;

  factory CopyWith$Input$UpsertChapterInput.stub(TRes res) =
      _CopyWithStubImpl$Input$UpsertChapterInput;

  TRes call({
    String? title,
    String? bookId,
  });
}

class _CopyWithImpl$Input$UpsertChapterInput<TRes>
    implements CopyWith$Input$UpsertChapterInput<TRes> {
  _CopyWithImpl$Input$UpsertChapterInput(
    this._instance,
    this._then,
  );

  final Input$UpsertChapterInput _instance;

  final TRes Function(Input$UpsertChapterInput) _then;

  static const _undefined = <dynamic, dynamic>{};

  TRes call({
    Object? title = _undefined,
    Object? bookId = _undefined,
  }) =>
      _then(Input$UpsertChapterInput._({
        ..._instance._$data,
        if (title != _undefined && title != null) 'title': (title as String),
        if (bookId != _undefined && bookId != null)
          'bookId': (bookId as String),
      }));
}

class _CopyWithStubImpl$Input$UpsertChapterInput<TRes>
    implements CopyWith$Input$UpsertChapterInput<TRes> {
  _CopyWithStubImpl$Input$UpsertChapterInput(this._res);

  TRes _res;

  call({
    String? title,
    String? bookId,
  }) =>
      _res;
}

enum Enum$__TypeKind {
  SCALAR,
  OBJECT,
  INTERFACE,
  UNION,
  ENUM,
  INPUT_OBJECT,
  LIST,
  NON_NULL,
  $unknown;

  factory Enum$__TypeKind.fromJson(String value) =>
      fromJson$Enum$__TypeKind(value);

  String toJson() => toJson$Enum$__TypeKind(this);
}

String toJson$Enum$__TypeKind(Enum$__TypeKind e) {
  switch (e) {
    case Enum$__TypeKind.SCALAR:
      return r'SCALAR';
    case Enum$__TypeKind.OBJECT:
      return r'OBJECT';
    case Enum$__TypeKind.INTERFACE:
      return r'INTERFACE';
    case Enum$__TypeKind.UNION:
      return r'UNION';
    case Enum$__TypeKind.ENUM:
      return r'ENUM';
    case Enum$__TypeKind.INPUT_OBJECT:
      return r'INPUT_OBJECT';
    case Enum$__TypeKind.LIST:
      return r'LIST';
    case Enum$__TypeKind.NON_NULL:
      return r'NON_NULL';
    case Enum$__TypeKind.$unknown:
      return r'$unknown';
  }
}

Enum$__TypeKind fromJson$Enum$__TypeKind(String value) {
  switch (value) {
    case r'SCALAR':
      return Enum$__TypeKind.SCALAR;
    case r'OBJECT':
      return Enum$__TypeKind.OBJECT;
    case r'INTERFACE':
      return Enum$__TypeKind.INTERFACE;
    case r'UNION':
      return Enum$__TypeKind.UNION;
    case r'ENUM':
      return Enum$__TypeKind.ENUM;
    case r'INPUT_OBJECT':
      return Enum$__TypeKind.INPUT_OBJECT;
    case r'LIST':
      return Enum$__TypeKind.LIST;
    case r'NON_NULL':
      return Enum$__TypeKind.NON_NULL;
    default:
      return Enum$__TypeKind.$unknown;
  }
}

enum Enum$__DirectiveLocation {
  QUERY,
  MUTATION,
  SUBSCRIPTION,
  FIELD,
  FRAGMENT_DEFINITION,
  FRAGMENT_SPREAD,
  INLINE_FRAGMENT,
  VARIABLE_DEFINITION,
  SCHEMA,
  SCALAR,
  OBJECT,
  FIELD_DEFINITION,
  ARGUMENT_DEFINITION,
  INTERFACE,
  UNION,
  ENUM,
  ENUM_VALUE,
  INPUT_OBJECT,
  INPUT_FIELD_DEFINITION,
  $unknown;

  factory Enum$__DirectiveLocation.fromJson(String value) =>
      fromJson$Enum$__DirectiveLocation(value);

  String toJson() => toJson$Enum$__DirectiveLocation(this);
}

String toJson$Enum$__DirectiveLocation(Enum$__DirectiveLocation e) {
  switch (e) {
    case Enum$__DirectiveLocation.QUERY:
      return r'QUERY';
    case Enum$__DirectiveLocation.MUTATION:
      return r'MUTATION';
    case Enum$__DirectiveLocation.SUBSCRIPTION:
      return r'SUBSCRIPTION';
    case Enum$__DirectiveLocation.FIELD:
      return r'FIELD';
    case Enum$__DirectiveLocation.FRAGMENT_DEFINITION:
      return r'FRAGMENT_DEFINITION';
    case Enum$__DirectiveLocation.FRAGMENT_SPREAD:
      return r'FRAGMENT_SPREAD';
    case Enum$__DirectiveLocation.INLINE_FRAGMENT:
      return r'INLINE_FRAGMENT';
    case Enum$__DirectiveLocation.VARIABLE_DEFINITION:
      return r'VARIABLE_DEFINITION';
    case Enum$__DirectiveLocation.SCHEMA:
      return r'SCHEMA';
    case Enum$__DirectiveLocation.SCALAR:
      return r'SCALAR';
    case Enum$__DirectiveLocation.OBJECT:
      return r'OBJECT';
    case Enum$__DirectiveLocation.FIELD_DEFINITION:
      return r'FIELD_DEFINITION';
    case Enum$__DirectiveLocation.ARGUMENT_DEFINITION:
      return r'ARGUMENT_DEFINITION';
    case Enum$__DirectiveLocation.INTERFACE:
      return r'INTERFACE';
    case Enum$__DirectiveLocation.UNION:
      return r'UNION';
    case Enum$__DirectiveLocation.ENUM:
      return r'ENUM';
    case Enum$__DirectiveLocation.ENUM_VALUE:
      return r'ENUM_VALUE';
    case Enum$__DirectiveLocation.INPUT_OBJECT:
      return r'INPUT_OBJECT';
    case Enum$__DirectiveLocation.INPUT_FIELD_DEFINITION:
      return r'INPUT_FIELD_DEFINITION';
    case Enum$__DirectiveLocation.$unknown:
      return r'$unknown';
  }
}

Enum$__DirectiveLocation fromJson$Enum$__DirectiveLocation(String value) {
  switch (value) {
    case r'QUERY':
      return Enum$__DirectiveLocation.QUERY;
    case r'MUTATION':
      return Enum$__DirectiveLocation.MUTATION;
    case r'SUBSCRIPTION':
      return Enum$__DirectiveLocation.SUBSCRIPTION;
    case r'FIELD':
      return Enum$__DirectiveLocation.FIELD;
    case r'FRAGMENT_DEFINITION':
      return Enum$__DirectiveLocation.FRAGMENT_DEFINITION;
    case r'FRAGMENT_SPREAD':
      return Enum$__DirectiveLocation.FRAGMENT_SPREAD;
    case r'INLINE_FRAGMENT':
      return Enum$__DirectiveLocation.INLINE_FRAGMENT;
    case r'VARIABLE_DEFINITION':
      return Enum$__DirectiveLocation.VARIABLE_DEFINITION;
    case r'SCHEMA':
      return Enum$__DirectiveLocation.SCHEMA;
    case r'SCALAR':
      return Enum$__DirectiveLocation.SCALAR;
    case r'OBJECT':
      return Enum$__DirectiveLocation.OBJECT;
    case r'FIELD_DEFINITION':
      return Enum$__DirectiveLocation.FIELD_DEFINITION;
    case r'ARGUMENT_DEFINITION':
      return Enum$__DirectiveLocation.ARGUMENT_DEFINITION;
    case r'INTERFACE':
      return Enum$__DirectiveLocation.INTERFACE;
    case r'UNION':
      return Enum$__DirectiveLocation.UNION;
    case r'ENUM':
      return Enum$__DirectiveLocation.ENUM;
    case r'ENUM_VALUE':
      return Enum$__DirectiveLocation.ENUM_VALUE;
    case r'INPUT_OBJECT':
      return Enum$__DirectiveLocation.INPUT_OBJECT;
    case r'INPUT_FIELD_DEFINITION':
      return Enum$__DirectiveLocation.INPUT_FIELD_DEFINITION;
    default:
      return Enum$__DirectiveLocation.$unknown;
  }
}

const possibleTypesMap = <String, Set<String>>{
  'BaseNode': {
    'Book',
    'Chapter',
  }
};
