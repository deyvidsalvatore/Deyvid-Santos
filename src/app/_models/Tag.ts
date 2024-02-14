export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
    static readonly PYTHON = new Tag('Python', 'gold');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.js', 'greenyellow');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly CSS = new Tag('CSS', 'blue');
    static readonly REACT = new Tag('React', 'deepskyblue');
    static readonly RUBY = new Tag('Ruby', 'orangered');
    static readonly GO = new Tag('GoLang', 'cyan');
    static readonly SPRINGBOOT = new Tag('Spring Boot', 'lime');
    static readonly RUBYONRAILS = new Tag('Ruby On Rails', 'tomato');
    static readonly DJANGO = new Tag('Django', 'seagreen');
    static readonly JAVA_EE = new Tag('Java EE', 'sandybrown');
    static readonly ANTLR = new Tag('ANTLR', 'gray');
    static readonly DOCKER = new Tag('Docker', 'cyan');
    static readonly SPRINGCLOUD = new Tag('Spring Cloud', 'lime');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}