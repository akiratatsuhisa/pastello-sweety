import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:pastellosweety/graphql/books.graphql.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final HttpLink httpLink = HttpLink();

    final AuthLink authLink = AuthLink(getToken: () async => '');

    final Link link = authLink.concat(httpLink);

    ValueNotifier<GraphQLClient> client = ValueNotifier(
      GraphQLClient(
        link: link,
        cache: GraphQLCache(
          store: InMemoryStore(),
        ),
      ),
    );

    return GraphQLProvider(
      client: client,
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        routes: {
          '/': (context) => const MyHomePage(title: 'Flutter Demo Home Page'),
        },
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Credentials? _credentials;

  Query$Books? _data;

  late Auth0 auth0;

  @override
  void initState() {
    super.initState();
    auth0 = Auth0(
      'dev-mwq8mvxazu7fnmi7.jp.auth0.com',
      'bj0DRTpeI03C9ONNzJwyZPPRnicJI6GX',
    );
  }

  _getData() async {
    final credentials = await auth0.credentialsManager.credentials();
    _credentials = credentials;
    return credentials;
  }

  _query() async {
    final client = GraphQLProvider.of(context).value;
    final result = await client.query$Books();

    setState(() {
      _data = result.parsedData;
    });
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _getData(),
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done) {
          return const SizedBox();
        }
        return Scaffold(
          appBar: AppBar(
            title: Text(widget.title),
          ),
          body: ListView(
            children: <Widget>[
              OutlinedButton(onPressed: _query, child: const Text('fetch')),
              Text(_data?.books.first.createdAt ?? ''),
              if (_credentials != null) Text(_credentials?.user.sub ?? ''),
              if (_credentials == null)
                ElevatedButton(
                  onPressed: () async {
                    // Use a Universal Link callback URL on iOS 17.4+ / macOS 14.4+
                    // useHTTPS is ignored on Android
                    final credentials = await auth0
                        .webAuthentication(scheme: 'pastellosweety')
                        .login(
                          useHTTPS: true,
                          audience: 'https://api.graphql-demo.com',
                        );

                    setState(() {
                      _credentials = credentials;
                    });
                  },
                  child: const Text("Log in"),
                )
              else
                ElevatedButton(
                  onPressed: () async {
                    // Use a Universal Link logout URL on iOS 17.4+ / macOS 14.4+
                    // useHTTPS is ignored on Android
                    await auth0
                        .webAuthentication(scheme: 'pastellosweety')
                        .logout(
                          useHTTPS: true,
                        );

                    setState(() {
                      _credentials = null;
                    });
                  },
                  child: const Text("Log out"),
                )
            ],
          ),
        );
      },
    );
  }
}
