// CMSC 124 reviewer content. In every question, c[0] is the correct choice (choices are shuffled on screen).
// Notes are HTML (write < as &lt;). Questions, choices and explanations are plain text.
window.COURSE = [
{
  id: "L1", title: "Preliminaries", sub: "Why study PLs, domains, evaluation criteria, categories, implementation",
  sections: [
  {
    id: "1.1", title: "Why Study Programming Languages", slides: ["L1", 1, 8],
    notes: [
      "<b>Stroustrup</b> (<i>The Design and Evolution of C++</i>): there is no agreement on what a programming language really is. A general-purpose language must be all of these: a tool for instructing machines, a means of communication between programmers, a notation for algorithms, and more. A language cannot survive as a mere collection of “neat” features.",
      "<b>Dijkstra</b>: the tools we use have a profound influence on our <b>thinking habits</b>, and therefore on our thinking abilities.",
      "<b>Six reasons</b> to study programming languages: (1) increased ability to <b>express ideas</b>; (2) improved background for <b>choosing appropriate languages</b>; (3) greater ability to <b>learn new languages</b>; (4) understand the <b>significance of implementation</b>; (5) ability to <b>design new languages</b>; (6) increase your <b>vocabulary of useful programming constructs</b>."
    ],
    quiz: [
      { q: "Which of the following is NOT one of the reasons for studying programming languages in Lecture 1?", c: ["To memorize the syntax of every popular language", "Increased ability to express ideas", "Greater ability to learn new languages", "Ability to design new languages"], x: "The six reasons are: express ideas, choose appropriate languages, learn new languages, understand implementation, design new languages, and grow your vocabulary of constructs." },
      { q: "According to Dijkstra, the tools we use have a profound influence on our…", c: ["thinking habits, and therefore our thinking abilities", "salary and job prospects", "program execution speed", "choice of hardware"], x: "Dijkstra: the tools we use influence our thinking habits, and therefore our thinking abilities." },
      { q: "According to Stroustrup, a language cannot survive as…", c: ["a mere collection of “neat” features", "a tool for instructing machines", "a notation for algorithms", "a means of communication among programmers"], x: "The other three are things a general-purpose language must be. A mere collection of neat features does not survive." },
      { q: "Knowing many languages gives you an “improved background for…”", c: ["choosing appropriate languages", "debugging hardware", "writing operating systems", "managing databases"], x: "One of the six reasons: improved background for choosing appropriate languages for a task." },
      { q: "Which reason is about knowing more constructs (loops, recursion, classes…) to reach for when you program?", c: ["To increase your vocabulary of useful programming constructs", "Understand the significance of implementation", "Improved background for choosing appropriate languages", "Ability to design new languages"], x: "The slide's wording: to increase your vocabulary of useful programming constructs." },
      { q: "True or false: Understanding the significance of implementation is one of the reasons to study programming languages.", c: ["True", "False"], x: "It is reason 4 of 6 on slide 8." }
    ]
  },
  {
    id: "1.2", title: "Programming Domains", slides: ["L1", 9, 10],
    notes: [
      "<b>Scientific applications</b>: a large number of <b>floating-point</b> computations.",
      "<b>Business applications</b>: produce <b>reports</b>, use <b>decimal numbers and characters</b>.",
      "<b>Artificial intelligence</b>: <b>symbols</b> rather than numbers are manipulated.",
      "<b>Systems programming</b>: needs <b>efficiency</b> because of continuous use.",
      "<b>Scripting languages</b>: put a <b>list of commands in a file</b> to be executed.",
      "<b>Special-purpose languages</b> (no details on the slide)."
    ],
    quiz: [
      { q: "Which domain is characterized by a large number of floating-point computations?", c: ["Scientific applications", "Business applications", "Artificial intelligence", "Scripting languages"], x: "Scientific applications do heavy floating-point computation." },
      { q: "Which domain produces reports and uses decimal numbers and characters?", c: ["Business applications", "Scientific applications", "Systems programming", "Artificial intelligence"], x: "Business applications: reports, decimal numbers and characters." },
      { q: "In which domain are symbols manipulated rather than numbers?", c: ["Artificial intelligence", "Scientific applications", "Business applications", "Systems programming"], x: "AI manipulates symbols rather than numbers." },
      { q: "Why does systems programming need efficiency?", c: ["Because of continuous use", "Because it produces reports", "Because it manipulates symbols", "Because it runs only once"], x: "Systems software (OS, compilers) is in continuous use, so it must be efficient." },
      { q: "“Put a list of commands in a file to be executed” describes which domain?", c: ["Scripting languages", "Special-purpose languages", "Systems programming", "Business applications"], x: "Scripting languages: a list of commands in a file." },
      { q: "True or false: Special-purpose languages are one of the programming domains listed.", c: ["True", "False"], x: "They are the sixth domain on slide 10." }
    ]
  },
  {
    id: "1.3", title: "Readability", slides: ["L1", 11, 15],
    notes: [
      "<b>Evaluation criteria</b>: readability, writability, reliability, cost, etc.",
      "<b>Readability</b> (how easily programs are understood) is <b>the most important criterion</b>.",
      "<b>Overall simplicity</b>: too many features is bad, and so is <b>multiplicity</b> of features (several ways to do the same thing).",
      "<b>Orthogonality</b>: makes the language easy to learn and read; meaning is <b>context independent</b>; a relatively small set of primitive constructs can be combined in a relatively small number of ways; <b>every possible combination is legal</b>. Lack of orthogonality leads to <b>exceptions to rules</b>, and too many exceptions are hard to remember.",
      "<b>Control statements</b>: <b>top-to-bottom</b> rather than jumps. The slide compares nested <code>while</code> loops with a <code>goto</code> version.",
      "<b>Data types and structures</b>: adequate facilities help. Example: a Boolean type, <code>timeout = true</code> is clearer than <code>timeout = 1</code>. <i>Heads up:</i> the slide sits under readability but its text calls it “an aid to <b>reliability</b>”.",
      "<b>Syntax considerations</b>: identifier norms (length), special/reserved words, and <b>form and meaning</b>: semantics should follow directly from syntax (form)."
    ],
    quiz: [
      { q: "Which language evaluation criterion does the lecture call the most important?", c: ["Readability", "Writability", "Reliability", "Cost"], x: "Slide 12: readability is the most important criterion." },
      { q: "Which best describes orthogonality?", c: ["A small set of primitive constructs can be combined in a small number of ways, and every combination is legal", "The language has many features for every situation", "Every statement must be on its own line", "Programs run at right angles to the hardware"], x: "Orthogonality: few primitives, few ways to combine them, every combination legal, meaning is context independent." },
      { q: "A lack of orthogonality leads to…", c: ["exceptions to rules", "faster programs", "fewer reserved words", "automatic type checking"], x: "Non-orthogonal languages have many exceptions to rules, and too many exceptions are hard to remember." },
      { q: "True or false: In an orthogonal language, the meaning of a construct depends on its context.", c: ["False", "True"], x: "Orthogonality means meaning is context INdependent." },
      { q: "For control statements, readability is improved by code that flows…", c: ["top-to-bottom rather than with jumps", "with as many goto statements as possible", "right-to-left", "inside one long line"], x: "Slide 13 compares nested while loops (top-to-bottom) with a goto version full of jumps.", fig: "L1-13" },
      { q: "Why is “timeout = true” more readable than “timeout = 1”?", c: ["Because the language provides a Boolean data type", "Because 1 is a reserved word", "Because it runs faster", "Because it uses fewer characters"], x: "This is the data types and structures factor: an adequate Boolean type makes intent clear." },
      { q: "“Semantics should follow directly from syntax” falls under which readability factor?", c: ["Syntax considerations: form and meaning", "Overall simplicity", "Orthogonality", "Control statements"], x: "Syntax considerations include identifier norms, special words, and form and meaning." },
      { q: "Overall simplicity is hurt by too many features and by…", c: ["multiplicity of features", "orthogonality", "reserved words", "type checking"], x: "Multiplicity of features means several ways to do the same thing, which hurts simplicity." }
    ]
  },
  {
    id: "1.4", title: "Writability, Reliability and Cost", slides: ["L1", 16, 19],
    notes: [
      "<b>Writability</b>: how easily a language can be used to create programs for a chosen problem domain. Most characteristics that affect readability also affect writability. Factors: <b>simplicity and orthogonality</b>, <b>support for abstraction</b>, <b>expressivity</b>.",
      "<b>Reliability</b>: a program is reliable if it <b>performs to its specifications under all conditions</b>. Factors: <b>type checking</b>, <b>exception handling</b>, <b>aliasing</b>, <b>readability and writability</b>.",
      "<b>Cost</b>: programmer training; writing programs (writability); compiling programs (compilation cost vs execution cost, i.e. <b>optimization</b>); executing programs; the language implementation system (“<b>free compilers</b> is the key, success of Java”); reliability (one system failure affects everyone); maintaining programs.",
      "<b>Maintenance costs</b> can be <b>two to four times</b> as much as development costs."
    ],
    quiz: [
      { q: "Writability is a measure of…", c: ["how easily a language can be used to create programs for a chosen problem domain", "how fast programs execute", "how easily programs can be understood", "how cheaply a compiler can be written"], x: "That is the slide's definition. “Easily understood” is readability." },
      { q: "Which is NOT a writability factor on the slide?", c: ["Exception handling", "Simplicity and orthogonality", "Support for abstraction", "Expressivity"], x: "Exception handling is a reliability factor." },
      { q: "A program is reliable if it…", c: ["performs to its specifications under all conditions", "compiles without warnings", "runs on every machine", "is short and readable"], x: "Reliability: performs to its specifications under all conditions." },
      { q: "Which is NOT one of the reliability factors on the slide?", c: ["Expressivity", "Type checking", "Exception handling", "Aliasing"], x: "Reliability factors: type checking, exception handling, aliasing, readability and writability. Expressivity is a writability factor." },
      { q: "Maintenance costs can be as high as how many times the development costs?", c: ["Two to four times", "Half", "Ten to twenty times", "Exactly the same"], x: "Slide 19: maintenance can cost two to four times as much as development." },
      { q: "According to the slide, what was the key to the success of Java?", c: ["Free compilers", "Free hardware", "Its use of goto", "Its small size"], x: "Under language implementation system cost: “Free compilers is the key, success of Java”." },
      { q: "The cost trade-off “compilation cost versus execution cost” is about…", c: ["optimization", "aliasing", "orthogonality", "programmer training"], x: "Spending more at compile time (optimizing) makes execution cheaper." },
      { q: "True or false: Readability and writability are listed as factors affecting reliability.", c: ["True", "False"], x: "Slide 17 lists them as the fourth reliability factor." }
    ]
  },
  {
    id: "1.5", title: "Trade-Offs and Design Influences", slides: ["L1", 20, 24],
    notes: [
      "<b>Sir Tony Hoare</b> (1973; Turing Award <b>1980</b>): “there are so many important but conflicting criteria, that their reconciliation and satisfaction is a major engineering task.”",
      "<b>Three trade-offs</b>: Reliability vs <b>Cost</b>; Writability vs <b>Readability</b>; Reliability vs <b>Writability (Flexibility)</b>.",
      "Most criteria <b>cannot be defined or measured precisely</b>. They look different to the language <b>designer</b>, <b>implementer</b> and <b>user</b>, and are influenced by state-of-the-art hardware and programming methodologies.",
      "<b>Computer architecture</b>: we use <b>imperative</b> languages, at least in part, because we use <b>von Neumann</b> machines. Von Neumann is considered the inventor of the <b>stored-program</b> machine: CPU + memory that holds <b>both program and data</b>. Focus: moving data and instructions between CPU registers and memory.",
      "Von Neumann diagram: <b>Memory</b>; <b>Processor</b> = <b>Control unit</b> + <b>Arithmetic logic unit</b> (which holds the <b>Accumulator</b>); <b>Input</b> and <b>Output</b>.",
      "<b>Programming methodologies</b>: 50s–early 60s simple applications, worry about <b>machine efficiency</b>; late 60s <b>people efficiency</b> (readability, better control structures, maintainability); late 70s <b>data abstraction</b>; middle 80s <b>object-oriented programming</b>; 90s distributed programs, internet, web; 00s autonomic systems? pervasive computing? genetic programming? semantic web?"
    ],
    quiz: [
      { q: "Who said “there are so many important but conflicting criteria, that their reconciliation and satisfaction is a major engineering task”?", c: ["Sir Tony Hoare", "Edsger Dijkstra", "Bjarne Stroustrup", "John von Neumann"], x: "Tony Hoare, 1973 (Turing Award 1980).", fig: "L1-20" },
      { q: "Which pair is NOT one of the three trade-offs on the slide?", c: ["Readability vs Reliability", "Reliability vs Cost", "Writability vs Readability", "Reliability vs Writability (Flexibility)"], x: "The three are Reliability vs Cost, Writability vs Readability, and Reliability vs Writability (Flexibility)." },
      { q: "In what year did Tony Hoare receive the Turing Award, per the slide?", c: ["1980", "1973", "1981", "2001"], x: "The quote is from 1973; the Turing Award was 1980." },
      { q: "We use imperative languages, at least in part, because we use…", c: ["von Neumann machines", "parallel machines", "quantum computers", "Lisp machines"], x: "Imperative languages mirror the von Neumann architecture: variables model memory cells, assignment models data movement." },
      { q: "In the von Neumann (stored-program) machine, memory holds…", c: ["both the program and the data", "only the program", "only the data", "only the accumulator"], x: "CPU + memory, where memory contains both program and data." },
      { q: "In the von Neumann diagram, the accumulator is part of the…", c: ["arithmetic logic unit", "control unit", "memory", "output device"], x: "Processor = control unit + ALU; the accumulator sits in the ALU.", fig: "L1-23" },
      { q: "In which era did the focus shift to “people efficiency” (readability, better control structures, maintainability)?", c: ["Late 60s", "50s and early 60s", "Late 70s", "Middle 80s"], x: "50s–60s machine efficiency, late 60s people efficiency, late 70s data abstraction, mid-80s OOP." },
      { q: "Object-oriented programming became the focus in the…", c: ["Middle 80s", "Late 60s", "Late 70s", "90s"], x: "Late 70s brought data abstraction; middle 80s brought object-oriented programming." },
      { q: "Which three perspectives judge language criteria differently?", c: ["Language designer, implementer and user", "Manager, tester and client", "CPU, memory and disk", "Compiler, linker and loader"], x: "Slide 21: designer, implementer and user see the criteria differently." }
    ]
  },
  {
    id: "1.6", title: "Language Categories", slides: ["L1", 25, 29],
    notes: [
      "<b>The Big Four</b>: imperative/procedural (Fortran, C), functional (Lisp, ML), rule-based (Prolog, Jess), object-oriented (Smalltalk, Java).",
      "<b>Imperative / procedural</b>: goal is to understand a <b>machine state</b> (memory locations, each with a value). Statement-oriented languages that change machine state. Central features: <b>variables, assignment statements, iteration</b>. Syntax: <code>S1, S2, S3, …</code>. Examples: C, Pascal, FORTRAN, COBOL, Visual Basic.",
      "<b>Functional / applicative</b>: goal is to understand the <b>function</b> that produces the answer. <b>Function composition</b> is the major operation. Syntax: <code>P1(P2(P3(X)))</code>. Examples: LISP, ML/CAML, Scheme, Haskell.",
      "<b>Rule-based / logic</b>: specify the rule that specifies the solution; programming = specifying the <b>attributes of the answer</b>. Syntax: <code>Answer -&gt; specification rule</code>. Examples: Prolog, BNF parsing, Jess.",
      "<b>Object-oriented</b>: imperative languages that merge applicative design with imperative statements. <b>Encapsulation</b>, <b>inheritance</b> and <b>dynamic type binding</b>. Examples: C++, Java, Smalltalk."
    ],
    quiz: [
      { q: "Which category's goal is to understand a machine state?", c: ["Imperative / procedural", "Functional / applicative", "Rule-based / logic", "Object-oriented"], x: "Imperative languages are statement-oriented and change the machine state." },
      { q: "The syntax pattern P1(P2(P3(X))) belongs to which category?", c: ["Functional", "Imperative", "Rule-based", "Object-oriented"], x: "Function composition is the major operation in functional languages." },
      { q: "The syntax pattern S1, S2, S3, … belongs to which category?", c: ["Imperative", "Functional", "Rule-based", "Object-oriented"], x: "A sequence of statements that change state is imperative." },
      { q: "“Answer -> specification rule” describes which category?", c: ["Rule-based / logic", "Functional", "Imperative", "Object-oriented"], x: "Logic programming specifies the attributes of the answer. Examples: Prolog, Jess." },
      { q: "Which are the central features of imperative languages?", c: ["Variables, assignment statements and iteration", "Functions, recursion and lists", "Rules, facts and queries", "Classes, objects and messages"], x: "Slide 26: variables, assignment and iteration." },
      { q: "Haskell is an example of which category?", c: ["Functional", "Imperative", "Rule-based", "Object-oriented"], x: "Functional examples: LISP, ML/CAML, Scheme, Haskell." },
      { q: "Jess is an example of which category?", c: ["Rule-based / logic", "Functional", "Imperative", "Object-oriented"], x: "Rule-based examples: Prolog, BNF parsing, Jess." },
      { q: "Which set of features does the slide list for object-oriented languages?", c: ["Encapsulation, inheritance and dynamic type binding", "Function composition and recursion", "Rules and inference", "Goto and labels"], x: "Slide 29: encapsulation, inheritance and dynamic type binding." },
      { q: "True or false: COBOL is classified as an imperative language.", c: ["True", "False"], x: "Imperative examples: C, Pascal, FORTRAN, COBOL, Visual Basic." }
    ]
  },
  {
    id: "1.7", title: "Implementation Methods", slides: ["L1", 30, 38],
    notes: [
      "<b>Layered view of a computer</b>: the <b>bare machine</b> at the center, then the macroinstruction interpreter, then the operating system, then an outer ring of compilers and interpreters (C, C++, FORTRAN, Ada, LISP interpreter, assembler…). Each outer piece presents a <b>virtual computer</b> (virtual C computer, virtual LISP computer…).",
      "<b>Compilation</b>: translates the high-level program to <b>machine code</b>. <b>Slow translation, fast execution</b>. Bottleneck: the <b>von Neumann bottleneck</b>. Pipeline: source → <b>lexical analyzer</b> → <b>syntax analyzer</b> → <b>semantic analyzer</b> → <b>code generator</b> → .obj → <b>linker</b> (+ external libraries) → execution results.",
      "<b>Pure interpretation</b>: <b>software simulation</b> of the machine (fetch-execute cycle); <b>no translation</b>; <b>easy reporting of errors</b>; <b>slow execution</b>; often requires <b>more space</b>. Bottleneck: <b>statement decoding</b>.",
      "<b>Hybrid</b>: <b>small translation cost</b>, <b>medium execution speed</b>. Translates to an <b>intermediate language</b> (compilation) that is easier to interpret (interpretation). Example: Java's <b>byte code</b>.",
      "“The 3 ways” diagram: compiler (parser → code generator → optimizer → machine code → loader/linker → executable image), interpreter (parser → interpreter), and virtual machine (parser → code generator → byte-code → virtual machine & runtime system)."
    ],
    quiz: [
      { q: "Which implementation method has slow translation but fast execution?", c: ["Compilation", "Pure interpretation", "Hybrid implementation", "Assembly"], x: "Compilation translates everything to machine code up front, so it runs fast." },
      { q: "Which bottleneck is associated with compilation?", c: ["The von Neumann bottleneck", "Statement decoding", "Garbage collection", "Lexical analysis"], x: "Compiled code is limited by the speed of moving data between memory and CPU: the von Neumann bottleneck." },
      { q: "The bottleneck of pure interpretation is…", c: ["statement decoding", "the von Neumann bottleneck", "linking", "byte code generation"], x: "An interpreter must decode every statement each time it runs it." },
      { q: "Which is NOT a property of pure interpretation?", c: ["Fast execution", "Easy reporting of errors", "Often requires more space", "Software simulation of the fetch-execute cycle"], x: "Pure interpretation has SLOW execution." },
      { q: "Java's byte code is an example of…", c: ["an intermediate language in a hybrid implementation", "machine code from a pure compiler", "a pure interpreter", "an assembler"], x: "Hybrid: compile to an intermediate language (byte code) that is easier to interpret." },
      { q: "Hybrid implementation has which combination of costs?", c: ["Small translation cost, medium execution speed", "Slow translation, fast execution", "No translation, slow execution", "No translation, fast execution"], x: "Slide 37: small translation cost, medium execution speed." },
      { q: "What is the correct order of the compiler phases on the slide?", c: ["Lexical analyzer → syntax analyzer → semantic analyzer → code generator", "Syntax analyzer → lexical analyzer → code generator → semantic analyzer", "Code generator → lexical analyzer → syntax analyzer → semantic analyzer", "Semantic analyzer → syntax analyzer → lexical analyzer → code generator"], x: "Characters become tokens (lexical), tokens become a parse tree (syntax), meaning is checked (semantic), then code is generated.", fig: "L1-34" },
      { q: "In the compilation diagram, which component combines the object files with external libraries?", c: ["Linker", "Lexical analyzer", "Semantic analyzer", "Interpreter"], x: "The linker joins file1.obj, file2.obj and external libraries.", fig: "L1-34" },
      { q: "In the layered view of a computer, what is at the very center?", c: ["The bare machine", "The operating system", "The C compiler", "The macroinstruction interpreter"], x: "Bare machine → macroinstruction interpreter → operating system → compilers and interpreters.", fig: "L1-30" },
      { q: "Which method involves no translation at all?", c: ["Pure interpretation", "Compilation", "Hybrid implementation", "Linking"], x: "A pure interpreter runs the high-level program directly in a software simulation." }
    ]
  },
  {
    id: "1.8", title: "Programming Environments", slides: ["L1", 39, 47],
    notes: [
      "A <b>programming environment</b> is the collection of tools used in software development, often an integrated <b>editor, debugger, compiler, collaboration tool</b>, etc.",
      "Modern <b>IDEs</b> tend to be <b>language specific</b>, so they can offer support at the level at which the programmer thinks.",
      "<b>UNIX</b>: an operating system with a tool collection. <b>EMACS</b>: a highly programmable text editor. <b>Smalltalk</b>: a language processor/environment. <b>Microsoft Visual C++</b>: a large, complex visual environment. <b>CodeBlocks</b>: C/C++ IDE. <b>Eclipse</b>: a generic IDE. <b>BlueJ, JBuilder, J++</b>: Java environments (BlueJ is “a simple Java IDE”)."
    ],
    quiz: [
      { q: "A programming environment is best described as…", c: ["the collection of tools used in software development", "the physical room where programmers work", "the operating system only", "the runtime memory of a program"], x: "Editor, debugger, compiler, collaboration tools and so on." },
      { q: "Which environment is “a highly programmable text editor”?", c: ["EMACS", "UNIX", "Eclipse", "BlueJ"], x: "EMACS is the highly programmable text editor." },
      { q: "UNIX is described as…", c: ["an operating system with a tool collection", "a generic IDE", "a Java environment", "a highly programmable text editor"], x: "UNIX: an operating system with a tool collection." },
      { q: "Which is described as a generic IDE?", c: ["Eclipse", "CodeBlocks", "BlueJ", "Smalltalk"], x: "Eclipse is the generic IDE; CodeBlocks is for C/C++." },
      { q: "CodeBlocks is an IDE for which language(s)?", c: ["C/C++", "Java", "Smalltalk", "LISP"], x: "CodeBlocks: C/C++ IDE." },
      { q: "Which of these is a Java environment?", c: ["BlueJ", "EMACS", "CodeBlocks", "UNIX"], x: "BlueJ, JBuilder and J++ are Java environments.", fig: "L1-46" },
      { q: "Why do modern IDEs tend to be language specific?", c: ["So they can offer support at the level at which the programmer thinks", "Because general IDEs are illegal", "To make compilation slower", "Because all languages share one syntax"], x: "Being language specific lets the IDE work with the programmer's own concepts." }
    ]
  }
  ]
},
{
  id: "L2", title: "Evolution", sub: "Generations, Plankalkül, pseudocodes, FORTRAN, LISP, ALGOL and later languages",
  sections: [
  {
    id: "2.1", title: "Levels and Generations", slides: ["L2", 1, 10],
    notes: [
      "<b>Levels</b>: high-level program (<code>float surface() return b*h/2;</code>), low-level program (<code>LOAD r1,b · LOAD r2,h · MUL r1,r2 · DIV r1,#2 · RET</code>), executable machine code (<code>0001001001000101…</code>).",
      "<b>1GL: machine language</b>. An <b>operation code</b> (e.g. addition, subtraction) plus <b>operands</b> that identify the data. It is the only language the computer understands. Very efficient code but very difficult to write. <i>Heads up:</i> the slide says “machine <b>in</b>dependent”; in reality machine language is machine <b>dependent</b>.",
      "<b>2GL: assembly</b>. <b>Symbolic</b> operation codes replaced binary ones. Programs must be <b>assembled</b>. Each assembly instruction translates to <b>one</b> machine instruction. Very efficient and easier to write.",
      "<b>3GL</b>: closer to English plus simple mathematical notation. <b>Source code</b> is translated into <b>object code</b> by a <b>compiler</b>; the alternative is an <b>interpreter</b>. FORTRAN, COBOL, C, C++, Visual Basic.",
      "<b>4GL</b>: needs <b>fewer instructions</b> than a 3GL. Used with <b>databases</b>: query languages, report generators, forms designers, application generators.",
      "<b>5GL</b>: declarative, functional and logic-based languages.",
      "<b>Beyond 5GL</b>: agent-oriented, aspect-oriented, intentional and natural-language programming."
    ],
    quiz: [
      { q: "First-generation languages are…", c: ["machine languages", "assembly languages", "query languages", "logic languages"], x: "1GL = machine language: opcodes and operands in binary." },
      { q: "In second-generation (assembly) languages, each assembly instruction is translated into…", c: ["one machine language instruction", "several hundred machine instructions", "a byte code instruction", "a query"], x: "One assembly instruction maps to exactly one machine instruction." },
      { q: "What replaced binary operation codes in assembly languages?", c: ["Symbolic operation codes", "English sentences", "Mathematical formulas", "Database queries"], x: "2GL: symbolic opcodes such as LOAD and MUL replaced binary ones." },
      { q: "In a 3GL, the program that translates source code into object code is called a…", c: ["compiler", "assembler", "linker", "loader"], x: "Source code is translated to object code by a compiler; the alternative is an interpreter." },
      { q: "Query languages, report generators and forms designers belong to which generation?", c: ["Fourth generation", "Third generation", "Second generation", "Fifth generation"], x: "4GLs are used with databases and need fewer instructions than 3GLs." },
      { q: "Fifth-generation languages are…", c: ["declarative, functional and logic-based languages", "assembly languages", "machine languages", "report generators"], x: "Slide 9: declarative, functional and logic-based." },
      { q: "Which is listed as going “beyond fifth generation”?", c: ["Aspect-oriented programming", "Assembly programming", "Report generators", "Machine language"], x: "Beyond 5GL: agent-oriented, aspect-oriented, intentional and natural-language programming." },
      { q: "The slide says machine language is “machine independent”. Which is actually true?", c: ["It is machine dependent: each processor family has its own machine language", "It runs unchanged on every computer", "It is the most portable language", "It is a 4GL"], x: "The slide's wording is a slip. Machine language is tied to one processor architecture." },
      { q: "In the levels slide, “LOAD r1,b / LOAD r2,h / MUL r1,r2” is an example of a…", c: ["low-level program", "high-level program", "executable machine code", "4GL query"], x: "Assembly-style instructions are the low-level program; the binary string is machine code.", fig: "L2-03" }
    ]
  },
  {
    id: "2.2", title: "Plankalkül and Pseudocodes", slides: ["L2", 11, 17],
    notes: [
      "<b>Genealogy</b>: FORTRAN I → ALGOL 58 → ALGOL 60 → Pascal, SIMULA, C; ALGOL 60 → SIMULA I → SIMULA 67 → Smalltalk and C++; C → C++ → Java; Pascal → Ada; LISP → Scheme → COMMON LISP; FLOW-MATIC → COBOL.",
      "<b>Plankalkül</b>: by <b>Konrad Zuse</b>. Designed <b>1945</b>, not published until <b>1972</b>. <b>Never implemented</b>. Advanced data structures: floating point, arrays, records. Selection (<b>no else</b>) and iteration. <b>Invariants</b> (like assertions). <b>Cumbersome notation</b>: rows for the expression, <b>V</b> (subscripts) and <b>S</b> (data types); <code>1.n</code> is an integer of n bits.",
      "<b>Pseudocodes</b> (late 1940s, early 1950s): computers were slow, unreliable, expensive, with small memories. Problems with machine code: poor readability, poor modifiability, tedious expression coding, machine deficiencies (no indexing or floating point).",
      "<b>Short Code</b>: by <b>Mauchly</b>, <b>1949</b>. Expressions coded <b>left to right</b>. Implemented with a <b>pure interpreter</b>. Codes: 01 −, 02 ), 03 =, 04 /, 06 abs, 07 +, 08 pause, 09 (, 1n power, 2n root, 4n if ≤ n, 58 print and tab.",
      "<b>Speedcoding</b>: by <b>Backus</b>, <b>1954</b>, for the <b>IBM 701</b>. Pseudo-ops for arithmetic and math functions; conditional and unconditional branching; <b>auto-increment registers</b> for array access. <b>Slow</b>; only <b>700 words</b> left for the user program.",
      "<b>UNIVAC Compiling System</b>: team led by <b>Grace Hopper</b>; pseudocode expanded into machine code. <b>David J. Wheeler</b> (Cambridge): blocks of <b>re-locatable addresses</b> to solve absolute addressing. <b>Maurice V. Wilkes</b> (Cambridge): an assembly program that could <b>combine chosen subroutines and allocate storage</b>."
    ],
    quiz: [
      { q: "Who developed Plankalkül?", c: ["Konrad Zuse", "John Backus", "John Mauchly", "Grace Hopper"], x: "Konrad Zuse designed Plankalkül in 1945." },
      { q: "Plankalkül was designed in 1945 but not published until…", c: ["1972", "1949", "1957", "1960"], x: "Designed 1945, published 1972, never implemented." },
      { q: "Which is TRUE about Plankalkül?", c: ["It was never implemented", "It was the first widely used high-level language", "It was implemented with a pure interpreter", "It ran on the IBM 704"], x: "Plankalkül was never implemented. Its notation was cumbersome." },
      { q: "In Plankalkül notation, what does “1.n” mean?", c: ["An integer of n bits", "The first n elements of an array", "Line 1, column n", "A floating-point number with n decimals"], x: "The S row gives data types; 1.n is an integer of n bits.", fig: "L2-13" },
      { q: "Plankalkül's selection statement lacked which feature?", c: ["An else clause", "A condition", "Iteration", "Floating point"], x: "Selection (no else), iteration, and invariants like assertions." },
      { q: "Short Code was developed by…", c: ["Mauchly in 1949", "Backus in 1954", "Zuse in 1945", "Hopper in 1952"], x: "Short Code: Mauchly, 1949, implemented with a pure interpreter." },
      { q: "Short Code was implemented with a…", c: ["pure interpreter", "compiler", "hybrid system", "linker"], x: "Expressions were coded left to right and interpreted directly." },
      { q: "Speedcoding was developed by Backus in 1954 for which machine?", c: ["IBM 701", "IBM 704", "UNIVAC I", "ENIAC"], x: "Speedcoding ran on the IBM 701. Fortran I was designed for the IBM 704." },
      { q: "With Speedcoding loaded, how many words were left for the user program?", c: ["700", "400", "6", "1024"], x: "Speedcoding was slow and left only 700 words for the user program." },
      { q: "Who led the team that developed the UNIVAC Compiling System?", c: ["Grace Hopper", "David J. Wheeler", "Maurice V. Wilkes", "John McCarthy"], x: "Grace Hopper's team: pseudocode expanded into machine code." },
      { q: "Who developed blocks of re-locatable addresses to solve the problem of absolute addressing?", c: ["David J. Wheeler", "Maurice V. Wilkes", "Grace Hopper", "John Backus"], x: "Wheeler (Cambridge): re-locatable addresses. Wilkes (Cambridge): assembly program combining subroutines." },
      { q: "Which was NOT listed as a problem with using machine code?", c: ["Too many reserved words", "Poor readability", "Poor modifiability", "Expression coding was tedious"], x: "Problems: poor readability, poor modifiability, tedious expression coding, no indexing or floating point." }
    ]
  },
  {
    id: "2.3", title: "FORTRAN", slides: ["L2", 18, 26],
    notes: [
      "<b>Fortran 0</b> (1954): not implemented. <b>Fortran I</b> (1957): designed for the new <b>IBM 704</b>, which had <b>index registers and floating-point hardware</b>.",
      "Environment: computers were small and unreliable; applications were scientific; no programming methodology or tools; <b>machine efficiency was the most important concern</b>.",
      "Impact on design: <b>no need for dynamic storage</b>; good array handling and counting loops; <b>no</b> string handling, decimal arithmetic or powerful I/O.",
      "<b>Fortran I</b>: first implemented version; names up to <b>six characters</b>; <b>post-test counting loop (DO)</b>; formatted I/O; user-defined subprograms; <b>three-way selection (arithmetic IF)</b>; <b>no data typing statements</b>; code was very fast; quickly became widely used. Programs larger than <b>400 lines</b> rarely compiled correctly.",
      "<b>Fortran II</b> (1958): <b>independent compilation</b>, fixed the bugs. <b>Fortran III</b>: developed but never widely distributed.",
      "<b>Fortran IV</b> (1960–62): <b>explicit type declarations</b>, <b>logical selection</b> statement, subprogram names could be parameters, <b>ANSI standard in 1966</b>.",
      "<b>Fortran 77</b> (standard in 1978): <b>character string handling</b>, logical loop control, <b>IF-THEN-ELSE</b>.",
      "<b>Fortran 90</b> (1990–92): <b>modules, dynamic arrays, pointers, recursion, CASE</b>, EXIT and CYCLE loops, parameter type checking. <b>Fortran 95</b>: minor additions plus some deletions. <b>Fortran 2003</b>: OOP, procedure pointers, interoperability with C. <b>Fortran 2008</b>: blocks for local scopes, <b>coarrays</b>.",
      "<b>Evaluation</b>: Fortran I favors <b>simplicity and efficiency over flexibility</b>; the <b>first widely used high-level language</b>; types and storage of all variables are <b>fixed before run time</b>; the <b>lingua franca</b> of the computing world."
    ],
    quiz: [
      { q: "Fortran I was designed for which computer?", c: ["IBM 704", "IBM 701", "UNIVAC I", "PDP-11"], x: "The IBM 704 had index registers and floating-point hardware." },
      { q: "In Fortran I's development environment, what was the most important concern?", c: ["Machine efficiency", "Readability", "Portability", "String handling"], x: "Computers were small and unreliable, so machine efficiency mattered most." },
      { q: "Fortran I names could have up to how many characters?", c: ["6", "8", "30", "31"], x: "Up to six characters." },
      { q: "Fortran I's selection statement was a…", c: ["three-way selection (arithmetic IF)", "CASE statement", "IF-THEN-ELSE", "logical IF"], x: "The arithmetic IF branched three ways (negative, zero, positive). The logical IF came in Fortran IV." },
      { q: "Which Fortran version introduced independent compilation?", c: ["Fortran II", "Fortran I", "Fortran IV", "Fortran 77"], x: "Fortran II (1958): independent compilation and bug fixes." },
      { q: "Which Fortran version added explicit type declarations and became an ANSI standard in 1966?", c: ["Fortran IV", "Fortran II", "Fortran 77", "Fortran 90"], x: "Fortran IV (1960–62)." },
      { q: "Character string handling and IF-THEN-ELSE were added in…", c: ["Fortran 77", "Fortran IV", "Fortran 90", "Fortran II"], x: "Fortran 77 became the standard in 1978." },
      { q: "Modules, dynamic arrays, pointers, recursion and CASE arrived in…", c: ["Fortran 90", "Fortran 77", "Fortran 2003", "Fortran IV"], x: "Fortran 90 (1990–92)." },
      { q: "Which Fortran version added support for OOP and interoperability with C?", c: ["Fortran 2003", "Fortran 95", "Fortran 2008", "Fortran 90"], x: "Fortran 2003. Fortran 2008 added coarrays and blocks for local scopes." },
      { q: "Fortran I programs larger than how many lines rarely compiled correctly?", c: ["400", "100", "700", "1000"], x: "Programs larger than 400 lines rarely compiled correctly." },
      { q: "Fortran is characterized as…", c: ["the lingua franca of the computing world", "the first language with classes", "the first logic language", "a language designed for teaching"], x: "Fortran was the first widely used high-level language and became its lingua franca." },
      { q: "True or false: In Fortran I, the types and storage of all variables are fixed before run time.", c: ["True", "False"], x: "No need for dynamic storage, so everything is fixed before run time." },
      { q: "Which feature did Fortran I NOT have?", c: ["String handling", "Post-test counting loop (DO)", "Formatted I/O", "User-defined subprograms"], x: "The scientific environment meant no string handling, decimal arithmetic or powerful I/O." }
    ]
  },
  {
    id: "2.4", title: "LISP", slides: ["L2", 27, 28],
    notes: [
      "<b>LISP</b> (<b>LISt Processing</b>) by <b>McCarthy at MIT</b>.",
      "AI research needed a language to process data in <b>lists</b> (rather than arrays) and do <b>symbolic</b> computations (rather than numeric).",
      "Only <b>two data types</b>: <b>atoms and lists</b>. Syntax is based on <b>lambda calculus</b>.",
      "Lists are chains of cells. Each cell has an element part and a pointer to the next cell. A sublist hangs off an element part, as in <code>(A (B C) D (E (F G)))</code>."
    ],
    quiz: [
      { q: "LISP was developed by…", c: ["McCarthy at MIT", "Backus at IBM", "Stroustrup at Bell Labs", "Wirth at ETH"], x: "John McCarthy at MIT." },
      { q: "LISP stands for…", c: ["LISt Processing", "Logical Instruction Set Program", "Linked Integer Storage Processor", "Language for Interactive Symbolic Programs"], x: "LISt Processing." },
      { q: "What are LISP's only two data types?", c: ["Atoms and lists", "Integers and reals", "Arrays and records", "Strings and characters"], x: "Only atoms and lists." },
      { q: "LISP's syntax is based on…", c: ["lambda calculus", "BNF", "set theory", "Boolean algebra"], x: "Slide 27: syntax is based on lambda calculus." },
      { q: "AI research needed a language that processes data in ___ and does ___ computation.", c: ["lists; symbolic", "arrays; numeric", "records; decimal", "files; floating-point"], x: "Lists rather than arrays, symbolic rather than numeric." },
      { q: "In the slide's diagram, how many cells are in the top-level list (A B C D)?", c: ["4", "2", "1", "8"], x: "One cell per element: A, B, C, D.", fig: "L2-28" }
    ]
  },
  {
    id: "2.5", title: "ALGOL", slides: ["L2", 29, 36],
    notes: [
      "<b>Environment</b>: FORTRAN had (barely) arrived for the IBM 70x; many other languages were being developed, all for specific machines; <b>no portable language</b>; <b>no universal language for communicating algorithms</b>.",
      "<b>ACM and GAMM</b> met for <b>four days</b>. Goals: close to mathematical notation; good for describing algorithms; must be translatable to machine code.",
      "<b>ALGOL 58</b>: concept of <b>type</b> was formalized; names of <b>any length</b>; arrays with any number of subscripts; parameters separated by mode (in & out); subscripts in brackets; compound statements (<code>begin … end</code>); semicolon as statement separator; assignment operator <code>:=</code>; <code>if</code> had an else-if clause; <b>no I/O</b> (“would make it machine dependent”). Not meant to be implemented, but variations were (<b>MAD, JOVIAL</b>). Support dropped by mid-1959.",
      "<b>ALGOL 60</b>: modified ALGOL 58 at a <b>6-day meeting in Paris</b>. New: <b>block structure</b> (local scope), <b>two parameter passing methods</b>, <b>subprogram recursion</b>, <b>stack-dynamic arrays</b>. Still no I/O and no string handling.",
      "<b>Successes</b>: the standard way to publish algorithms for over <b>20 years</b>; all subsequent imperative languages are based on it; <b>first machine-independent</b> language; <b>first language whose syntax was formally defined (BNF)</b>.",
      "<b>Failure</b>: never widely used. Reasons: no I/O and the character set made programs non-portable; too flexible; formal syntax description; <b>lack of support of IBM</b>.",
      "<b>ALGOL 68</b>: design based on <b>orthogonality</b>. Contributions: user-defined structures, reference types, dynamic arrays (<b>flex arrays</b>)."
    ],
    quiz: [
      { q: "Which two organizations met to design ALGOL?", c: ["ACM and GAMM", "IBM and ANSI", "MIT and Stanford", "Bell Labs and Sun"], x: "ACM and GAMM met for four days." },
      { q: "What was ALGOL 58's assignment operator?", c: [":=", "=", "<-", "=="], x: "ALGOL introduced := for assignment." },
      { q: "Why did ALGOL 58 have no I/O?", c: ["It “would make it machine dependent”", "No one needed I/O at the time", "I/O was patented by IBM", "It was added only in ALGOL 58 Plus"], x: "Leaving out I/O was meant to keep ALGOL machine independent." },
      { q: "Which languages were implemented variations of ALGOL 58?", c: ["MAD and JOVIAL", "COBOL and BASIC", "Pascal and Ada", "C and C++"], x: "ALGOL 58 wasn't meant to be implemented, but MAD and JOVIAL were variations of it." },
      { q: "Which feature was NEW in ALGOL 60?", c: ["Block structure (local scope)", "The := operator", "Compound statements (begin…end)", "Names of any length"], x: "ALGOL 60 added block structure, two parameter passing methods, recursion and stack-dynamic arrays. The others were already in ALGOL 58." },
      { q: "ALGOL was the first language whose syntax was formally defined using…", c: ["BNF", "EBNF", "UML", "Regular expressions"], x: "ALGOL 60 was described in Backus-Naur Form." },
      { q: "For about how long was ALGOL the standard way to publish algorithms?", c: ["Over 20 years", "2 years", "5 years", "Over 50 years"], x: "Over 20 years." },
      { q: "Which is NOT one of the reasons ALGOL was never widely used?", c: ["It had no block structure", "Lack of support of IBM", "Too flexible", "No I/O and the character set made programs non-portable"], x: "ALGOL 60 introduced block structure. The failure reasons were no I/O/character set, too flexible, formal syntax description, and lack of IBM support." },
      { q: "ALGOL 68's design was based on…", c: ["orthogonality", "machine efficiency", "data abstraction", "logic"], x: "ALGOL 68 was designed around orthogonality." },
      { q: "In ALGOL 68, dynamic arrays were called…", c: ["flex arrays", "stack arrays", "heap arrays", "coarrays"], x: "ALGOL 68 contributions: user-defined structures, reference types, flex arrays." },
      { q: "ALGOL 60 was produced at a 6-day meeting in which city?", c: ["Paris", "Zurich", "London", "Boston"], x: "ALGOL 58 was modified at a 6-day meeting in Paris." }
    ]
  },
  {
    id: "2.6", title: "Pascal, Simula, Prolog and Ada", slides: ["L2", 37, 40],
    notes: [
      "<b>Pascal</b> (Niklaus Wirth): “better Algol 68”; <b>designed for teaching</b>; Turing Award <b>1981</b>.",
      "<b>Simula</b> (Nygaard & Dahl): <b>first language with data abstraction</b>; introduced the concept of <b>“class”</b>; Turing Award <b>2001</b>.",
      "<b>Prolog</b>: developed at the <b>University of Aix-Marseille</b> by Colmerauer (the slide spells it “Comarauer”) and Roussel, with some help from <b>Kowalski</b> at the University of Edinburgh. <b>Based on formal logic</b>; <b>non-procedural</b>; an intelligent database system that uses an <b>inferencing</b> process to infer the truth of given queries.",
      "<b>Ada</b>: the <b>world's largest design effort</b>. Contributions: <b>packages</b> (data abstraction), <b>exception handling</b>, <b>generic program units</b>, <b>concurrency</b> through the <b>tasking model</b>. Included all that was known about software engineering and language design."
    ],
    quiz: [
      { q: "Pascal was designed mainly for…", c: ["teaching", "business reports", "AI research", "systems programming"], x: "Pascal, the “better Algol 68”, was designed for teaching." },
      { q: "Which language was the first with data abstraction and introduced the concept of “class”?", c: ["Simula", "Pascal", "Ada", "C++"], x: "Simula. C++ took its OOP facilities from Simula." },
      { q: "Prolog was developed at which university?", c: ["University of Aix-Marseille", "MIT", "Cambridge University", "University of Paris"], x: "Aix-Marseille, with some help from Kowalski at Edinburgh." },
      { q: "Prolog is based on…", c: ["formal logic", "lambda calculus", "von Neumann architecture", "relational algebra only"], x: "Prolog is based on formal logic and is non-procedural." },
      { q: "Prolog can be summarized as an intelligent database system that uses ___ to infer the truth of queries.", c: ["an inferencing process", "a pure interpreter for Short Code", "pointers", "assembly"], x: "Slide 39: it uses an inferencing process." },
      { q: "Which language is described as the world's largest design effort?", c: ["Ada", "ALGOL 60", "PL/I", "Java"], x: "Ada included all that was known about software engineering and language design." },
      { q: "Ada supports concurrency through…", c: ["the tasking model", "threads and locks only", "coarrays", "applets"], x: "Ada's concurrency is through the tasking model." },
      { q: "Which is NOT one of Ada's listed contributions?", c: ["The concept of class", "Packages", "Exception handling", "Generic program units"], x: "The class concept came from Simula." },
      { q: "Which language's designers won the Turing Award in 2001?", c: ["Simula", "Pascal", "Ada", "Prolog"], x: "Simula: Turing Award 2001. Pascal: 1981." }
    ]
  },
  {
    id: "2.7", title: "C++, Java and C#", slides: ["L2", 41, 44],
    notes: [
      "<b>C++</b>: by <b>Stroustrup at Bell Labs</b>. OOP facilities taken from <b>Simula</b> were added to <b>C</b>. Also has exception handling. A large, complex language that supports <b>both procedural and OO</b> programming.",
      "<b>Java</b>: developed at <b>Sun</b>. <b>Based on C++</b> but significantly simplified. Supports <b>only OOP</b>. Includes support for applets and a form of concurrency.",
      "<b>C#</b>: designed by <b>Anders Hejlsberg</b>. A “better” version of C++ and Java; part of the <b>.NET framework</b>; <b>more type-safe than C++</b>."
    ],
    quiz: [
      { q: "C++ was developed by…", c: ["Stroustrup at Bell Labs", "Hejlsberg at Microsoft", "Gosling at Sun", "Wirth at ETH"], x: "Bjarne Stroustrup at Bell Labs." },
      { q: "The OOP facilities added to C to create C++ were taken from…", c: ["Simula", "Smalltalk", "Ada", "Pascal"], x: "Slide 41: facilities for OOP, taken from Simula, were added to C." },
      { q: "Which language supports ONLY object-oriented programming?", c: ["Java", "C++", "C", "Fortran 2003"], x: "Java supports only OOP; C++ supports both procedural and OO." },
      { q: "Java was developed at…", c: ["Sun", "Bell Labs", "Microsoft", "IBM"], x: "Java: developed at Sun, based on C++." },
      { q: "Who designed C#?", c: ["Anders Hejlsberg", "Bjarne Stroustrup", "Dennis Ritchie", "Niklaus Wirth"], x: "Anders Hejlsberg." },
      { q: "C# is part of which framework?", c: [".NET", "Java EE", "Cocoa", "Qt"], x: "C# is part of the .NET framework." },
      { q: "Compared with C++, C# is…", c: ["more type-safe", "less type-safe", "purely procedural", "not object-oriented"], x: "Slide 43: more type-safe than C++." },
      { q: "True or false: C++ supports both procedural and object-oriented programming.", c: ["True", "False"], x: "It is a large and complex language supporting both." }
    ]
  }
  ]
},
{
  id: "L3", title: "Syntax", sub: "Lexemes and tokens, BNF, derivations, parse trees, ambiguity, EBNF, ASTs",
  sections: [
  {
    id: "3.1", title: "Syntax, Semantics, Lexemes and Tokens", slides: ["L3", 1, 6],
    notes: [
      "Languages have a “grammar” (rules). Programming languages have one too: <b>designers</b> create it; programmers and other implementors learn and use it.",
      "<b>Syntax</b>: from Latin <i>syntaxis</i>, from Greek <i>syn</i> + <i>tassein</i>, “together” + “arrange”. The study of the structure of sentences.",
      "<b>Syntax</b> is the <b>form or structure</b> of expressions, statements and program units. <b>Semantics</b> is their <b>meaning</b>.",
      "A <b>sentence</b> is a string of characters over some alphabet. A <b>language</b> is a set of sentences.",
      "A <b>lexeme</b> is the lowest-level syntactic unit of a language (e.g. <code>*</code>, <code>sum</code>, <code>begin</code>). A <b>token</b> is a <b>category</b> of lexemes (e.g. <i>identifier</i>)."
    ],
    quiz: [
      { q: "Syntax is…", c: ["the form or structure of expressions, statements and program units", "the meaning of expressions, statements and program units", "the speed of a program", "the memory used by a program"], x: "Syntax = form/structure. Semantics = meaning." },
      { q: "Semantics is…", c: ["the meaning of expressions, statements and program units", "the form of expressions, statements and program units", "the list of reserved words", "the set of tokens"], x: "Semantics deals with meaning." },
      { q: "The Greek roots of “syntax”, syn + tassein, mean…", c: ["“together” + “arrange”", "“meaning” + “form”", "“word” + “order”", "“rule” + “language”"], x: "syn = together, tassein = arrange." },
      { q: "A language is defined as…", c: ["a set of sentences", "a string of characters", "a category of lexemes", "a set of rules"], x: "A sentence is a string over an alphabet; a language is a set of sentences." },
      { q: "In the statement sum = sum + 1, “sum” is a ___ and “identifier” is a ___.", c: ["lexeme; token", "token; lexeme", "sentence; language", "terminal; grammar"], x: "A lexeme is the actual unit (sum). A token is its category (identifier)." },
      { q: "A token is…", c: ["a category of lexemes", "the lowest-level syntactic unit", "a set of sentences", "a string over an alphabet"], x: "E.g. identifier is a token; sum and count are lexemes in that category." },
      { q: "Who creates the grammar of a programming language?", c: ["Designers", "Programmers", "Compilers", "End users"], x: "Designers create grammars; programmers and implementors learn and use them." },
      { q: "True or false: “begin” and “*” are examples of lexemes.", c: ["True", "False"], x: "Slide 6 gives *, sum and begin as lexemes." }
    ]
  },
  {
    id: "3.2", title: "Recognizers, CFGs and BNF", slides: ["L3", 7, 13],
    notes: [
      "Formal approaches to describing syntax: <b>recognizers</b> (used in <b>compilers</b>) and <b>generators</b> (generate the sentences of a language).",
      "<b>Context-free grammars</b>: developed by <b>Noam Chomsky</b> in the <b>mid-1950s</b>. Language generators meant to describe the syntax of <b>natural languages</b>. They define the class of <b>context-free languages</b>.",
      "<b>Backus-Naur Form</b> (<b>1959</b>): invented by <b>John Backus</b> to describe <b>ALGOL 58</b>. <b>BNF is equivalent to CFG</b>. A <b>metalanguage</b> is a language used to describe another language. <b>Abstractions</b> represent classes of syntactic structures.",
      "Example rule: <code>&lt;while_stmt&gt; → while ( &lt;logic_expr&gt; ) &lt;stmt&gt;</code>. Rules describe how phrases/statements are generated.",
      "A <b>rule</b> has a left-hand side (<b>LHS</b>) and right-hand side (<b>RHS</b>) made of <b>terminal</b> and <b>nonterminal</b> symbols. A <b>grammar</b> is a <b>finite nonempty set of rules</b>. A nonterminal can have <b>more than one RHS</b> (separated by <code>|</code>).",
      "A <b>derivation</b> is a repeated application of rules, starting with the <b>start symbol</b> and ending with a <b>sentence</b> (all terminal symbols).",
      "Example grammar: <code>&lt;program&gt; → &lt;stmts&gt;</code>; <code>&lt;stmts&gt; → &lt;stmt&gt; | &lt;stmt&gt; ; &lt;stmts&gt;</code>; <code>&lt;stmt&gt; → &lt;var&gt; = &lt;expr&gt;</code>; <code>&lt;var&gt; → a | b | c | d</code>; <code>&lt;expr&gt; → &lt;term&gt; + &lt;term&gt; | &lt;term&gt; - &lt;term&gt;</code>; <code>&lt;term&gt; → &lt;var&gt; | const</code>."
    ],
    quiz: [
      { q: "Recognizers, as a formal method of describing syntax, are used in…", c: ["compilers", "text editors", "operating systems", "databases"], x: "Recognizers decide whether input belongs to the language, which is what a compiler's parser does." },
      { q: "Generators, as a formal method, …", c: ["generate the sentences of a language", "check the types of variables", "allocate memory", "link object files"], x: "Generators produce sentences; recognizers check them." },
      { q: "Context-free grammars were developed by…", c: ["Noam Chomsky in the mid-1950s", "John Backus in 1959", "Konrad Zuse in 1945", "John McCarthy in 1958"], x: "Chomsky, mid-1950s, to describe the syntax of natural languages." },
      { q: "BNF was invented by John Backus to describe…", c: ["ALGOL 58", "FORTRAN I", "LISP", "COBOL"], x: "Backus-Naur Form (1959) was created to describe ALGOL 58." },
      { q: "What is the relationship between BNF and context-free grammars?", c: ["They are equivalent", "BNF is strictly more powerful", "CFGs are strictly more powerful", "They are unrelated"], x: "Slide 9: BNF is equivalent to CFG." },
      { q: "A language used to describe another language is called a…", c: ["metalanguage", "sublanguage", "machine language", "token"], x: "BNF is a metalanguage for programming languages." },
      { q: "A grammar is…", c: ["a finite nonempty set of rules", "an infinite set of sentences", "a single rule", "a set of tokens"], x: "Slide 11: a grammar is a finite nonempty set of rules." },
      { q: "In <while_stmt> → while ( <logic_expr> ) <stmt>, which symbol is a terminal?", c: ["while", "<logic_expr>", "<stmt>", "<while_stmt>"], x: "Terminals appear literally in sentences. Names in angle brackets are nonterminals.", fig: "L3-10" },
      { q: "True or false: A nonterminal (abstraction) can have more than one right-hand side.", c: ["True", "False"], x: "Alternatives are separated by |, e.g. <var> → a | b | c | d." },
      { q: "A rule consists of…", c: ["a left-hand side and a right-hand side of terminal and nonterminal symbols", "only terminal symbols", "a start symbol and a sentence", "a lexeme and its token"], x: "LHS → RHS, built from terminals and nonterminals." }
    ]
  },
  {
    id: "3.3", title: "Derivations and Parse Trees", slides: ["L3", 14, 17],
    notes: [
      "Every string of symbols in a derivation is a <b>sentential form</b> (any string that can be derived from the start symbol). A <b>sentence</b> is a sentential form consisting <b>only of terminals</b>.",
      "A <b>leftmost derivation</b> is one in which the <b>leftmost nonterminal</b> in each sentential form is the one being expanded.",
      "Example derivation of <code>a = b + const</code>: <code>&lt;program&gt; ⇒ &lt;stmts&gt; ⇒ &lt;stmt&gt; ⇒ &lt;var&gt; = &lt;expr&gt; ⇒ a = &lt;expr&gt; ⇒ a = &lt;term&gt; + &lt;term&gt; ⇒ a = &lt;var&gt; + &lt;term&gt; ⇒ a = b + &lt;term&gt; ⇒ a = b + const</code>.",
      "<b>Parsing</b> is the process of breaking down sentences. A <b>parse tree</b> is a <b>hierarchical representation of a derivation</b>; it shows how sentences are generated.",
      "<b>Exercise 1</b>: grammar <code>E → E+T | E−T | T</code>, <code>T → T*F | T/F | F</code>, <code>F → i | (E)</code>. For <code>i+i*i</code>: <code>E ⇒ E+T ⇒ T+T ⇒ F+T ⇒ i+T ⇒ i+T*F ⇒ i+F*F ⇒ i+i*F ⇒ i+i*i</code>. The <code>+</code> is at the root and <code>*</code> sits lower, so <code>*</code> is evaluated first."
    ],
    quiz: [
      { q: "A sentential form is…", c: ["any string that can be derived from the start symbol", "a string made only of nonterminals", "a single grammar rule", "a category of lexemes"], x: "Every string in a derivation is a sentential form." },
      { q: "A sentence (in a derivation) is a sentential form consisting only of…", c: ["terminals", "nonterminals", "start symbols", "rules"], x: "Once no nonterminals remain, the sentential form is a sentence." },
      { q: "In a leftmost derivation, which nonterminal is expanded at each step?", c: ["The leftmost nonterminal", "The rightmost nonterminal", "Any nonterminal", "The start symbol only"], x: "By definition, always expand the leftmost nonterminal." },
      { q: "A parse tree is…", c: ["a hierarchical representation of a derivation", "a list of tokens", "the machine code of a program", "a table of reserved words"], x: "Slide 16: a hierarchical representation of a derivation." },
      { q: "Parsing is…", c: ["the process of breaking down sentences", "the process of generating machine code", "the process of linking libraries", "the process of allocating memory"], x: "Slide 15: parsing is breaking down sentences." },
      { q: "Using the example grammar, in deriving a = b + const, what comes right after “a = <expr>”?", c: ["a = <term> + <term>", "a = b + <term>", "<var> = <expr>", "a = <var> + const"], x: "<expr> is replaced by <term> + <term>, then the leftmost <term> becomes <var>, then b.", fig: "L3-13" },
      { q: "With E → E+T | T, T → T*F | F, F → i | (E), which operator is at the root of the parse tree for i+i*i?", c: ["+", "*", "Both are at the root", "Neither, i is at the root"], x: "E ⇒ E+T puts + at the top; * appears lower inside T, so * is evaluated first.", fig: "L3-17" },
      { q: "In the E/T/F grammar, why is * evaluated before +?", c: ["Because * is generated lower in the parse tree", "Because * appears first in the sentence", "Because the grammar is ambiguous", "Because + is a nonterminal"], x: "Lower in the tree means higher precedence." }
    ]
  },
  {
    id: "3.4", title: "Ambiguity", slides: ["L3", 18, 23],
    notes: [
      "A grammar is <b>ambiguous</b> if some sentence can be generated in <b>more than one way</b>, i.e. it has two or more distinct parse trees (or leftmost derivations).",
      "<b>Exercise 2</b>: <code>&lt;expr&gt; → &lt;expr&gt; &lt;op&gt; &lt;expr&gt; | const</code>, <code>&lt;op&gt; → / | -</code>. The sentence <code>const - const / const</code> has two parse trees: <code>(const - const) / const</code> and <code>const - (const / const)</code>. So it is ambiguous.",
      "<b>Exercise 3</b>: <code>&lt;S&gt; → &lt;A&gt;</code>, <code>&lt;A&gt; → &lt;A&gt; + &lt;A&gt; | &lt;id&gt;</code>, <code>&lt;id&gt; → a | b | c</code>. <b>Ambiguous</b>: <code>a + b + c</code> can be grouped <code>(a+b)+c</code> or <code>a+(b+c)</code>.",
      "<b>Exercise 4</b>: <code>&lt;expr&gt; → &lt;expr&gt; + &lt;expr&gt; | &lt;expr&gt; * &lt;expr&gt; | (&lt;expr&gt;) | &lt;id&gt;</code> with <code>A = B + C * A</code>. One leftmost derivation puts <code>+</code> at the top, B + (C * A); another puts <code>*</code> at the top, (B + C) * A. Two derivations, so ambiguous.",
      "<b>Precedence fix</b>: use levels <code>&lt;expr&gt;</code> → <code>&lt;term&gt;</code> → <code>&lt;factor&gt;</code>. The <b>lower</b> an operator sits in the tree, the <b>higher</b> its precedence, so <code>*</code> lives in <code>&lt;term&gt;</code> and <code>+</code> in <code>&lt;expr&gt;</code>.",
      "<b>Associativity</b> can also be indicated by a grammar: <code>&lt;expr&gt; → &lt;expr&gt; + &lt;expr&gt; | const</code> is ambiguous; <code>&lt;expr&gt; → &lt;expr&gt; + const | const</code> is unambiguous (left recursion = left associative).",
      "<i>Heads up:</i> slide 22's “unambiguous” grammar still has <code>&lt;expr&gt; → &lt;expr&gt; + &lt;expr&gt;</code>. It fixes precedence, but <code>+</code> itself is still ambiguous. The full fix is <code>&lt;expr&gt; → &lt;expr&gt; + &lt;term&gt; | &lt;term&gt;</code>."
    ],
    quiz: [
      { q: "A grammar is ambiguous if…", c: ["some sentence can be generated in more than one way", "it has more than one nonterminal", "it has more than one rule", "it uses EBNF"], x: "Two distinct parse trees (or leftmost derivations) for one sentence = ambiguous." },
      { q: "How do you prove a grammar is ambiguous?", c: ["Find one sentence that has two distinct parse trees", "Show that it has a recursive rule", "Show that it has more than one terminal", "Show that every sentence has exactly one parse tree"], x: "A single sentence with two parse trees (or two leftmost derivations) is enough." },
      { q: "With <expr> → <expr> <op> <expr> | const and <op> → / | -, how many parse trees does const - const / const have?", c: ["2", "1", "3", "0"], x: "(const - const) / const and const - (const / const).", fig: "L3-19" },
      { q: "Is <S> → <A>, <A> → <A> + <A> | <id>, <id> → a | b | c ambiguous?", c: ["Yes, a + b + c has two parse trees", "No, it has only one parse tree for every sentence", "No, because it has no * operator", "Yes, because it has three terminals"], x: "a + b + c can be grouped as (a+b)+c or a+(b+c)." },
      { q: "In the unambiguous expression grammar, the lower an operator appears in the parse tree…", c: ["the higher its precedence", "the lower its precedence", "the more ambiguous the grammar", "the later it is evaluated"], x: "Lower operators are evaluated first, so they have higher precedence." },
      { q: "Which grammar is unambiguous and left-associative?", c: ["<expr> → <expr> + const | const", "<expr> → <expr> + <expr> | const", "<expr> → const + <expr> + <expr> | const", "<expr> → <expr> <expr> | const"], x: "Left recursion with a single <expr> on the left grows the tree down the left side: left associativity.", fig: "L3-23" },
      { q: "In Exercise 4 (A = B + C * A with an ambiguous grammar), the two leftmost derivations correspond to…", c: ["B + (C * A) and (B + C) * A", "A = B and C * A", "B + C and C * A", "(A = B) + (C * A) and A = (B + C * A)"], x: "One tree has + at the top, the other has * at the top.", fig: "L3-21" },
      { q: "The slide-22 grammar separates <expr>, <term> and <factor> but keeps <expr> → <expr> + <expr>. What does it still leave ambiguous?", c: ["The associativity of +", "The precedence of * over +", "Parenthesized expressions", "Identifiers"], x: "Precedence is fixed, but a + b + c still has two trees. Use <expr> → <expr> + <term> | <term>.", fig: "L3-22" },
      { q: "True or false: Operator associativity can be indicated by a grammar.", c: ["True", "False"], x: "Slide 23: left recursion gives left associativity." }
    ]
  },
  {
    id: "3.5", title: "Extended BNF", slides: ["L3", 24, 26],
    notes: [
      "<b>EBNF</b> adds three features: <b>optional parts</b> <code>[ … ]</code>; <b>iteration/repetitions</b> <code>{ … }</code> (zero or more); <b>choices/alternative parts</b> <code>( … | … )</code>.",
      "Examples: <code>&lt;if_stmt&gt; → if ( &lt;exp&gt; ) &lt;stmt&gt; [ else &lt;stmt&gt; ]</code>; <code>&lt;list&gt; → &lt;elem&gt; { , &lt;elem&gt; }</code>; <code>&lt;exp&gt; → &lt;exp&gt; ( + | - ) &lt;exp&gt;</code>.",
      "<b>Exercise 5</b>: BNF <code>&lt;expr&gt; → &lt;expr&gt; + &lt;term&gt; | &lt;expr&gt; - &lt;term&gt; | &lt;term&gt;</code> and <code>&lt;term&gt; → &lt;term&gt; * &lt;factor&gt; | &lt;term&gt; / &lt;factor&gt; | &lt;factor&gt;</code> become EBNF <code>&lt;expr&gt; → &lt;term&gt; {(+ | -) &lt;term&gt;}</code> and <code>&lt;term&gt; → &lt;factor&gt; {(* | /) &lt;factor&gt;}</code>.",
      "Pattern: left recursion <code>X → X op Y | Y</code> becomes <code>X → Y { op Y }</code>."
    ],
    quiz: [
      { q: "In EBNF, square brackets [ … ] mean…", c: ["an optional part", "repetition (zero or more)", "a choice between alternatives", "a terminal symbol"], x: "[ ] = optional, { } = repetition, ( | ) = choice." },
      { q: "In EBNF, braces { … } mean…", c: ["iteration / repetition (zero or more times)", "an optional part used exactly once", "a choice between alternatives", "a comment"], x: "{ } repeats its contents zero or more times." },
      { q: "In EBNF, ( … | … ) means…", c: ["a choice among alternative parts", "an optional part", "repetition", "a nonterminal"], x: "Parentheses with | pick one alternative." },
      { q: "What is the EBNF version of <expr> → <expr> + <term> | <expr> - <term> | <term>?", c: ["<expr> → <term> {(+ | -) <term>}", "<expr> → <expr> [+ | -] <term>", "<expr> → {<term>} (+ | -)", "<expr> → <term> [(+ | -) <expr>]"], x: "Left recursion X → X op Y | Y becomes X → Y {op Y}.", fig: "L3-26" },
      { q: "Which EBNF rule describes an if statement with an optional else?", c: ["<if_stmt> → if ( <exp> ) <stmt> [ else <stmt> ]", "<if_stmt> → if ( <exp> ) <stmt> { else <stmt> }", "<if_stmt> → if ( <exp> ) ( <stmt> | else )", "<if_stmt> → [ if ] ( <exp> ) <stmt> else <stmt>"], x: "The else part may appear zero or one time, so it goes in [ ]." },
      { q: "How many new features does EBNF add to BNF, per the slide?", c: ["3", "2", "4", "5"], x: "Optional parts, repetitions, and choices." },
      { q: "True or false: EBNF can describe languages that BNF cannot.", c: ["False", "True"], x: "EBNF only makes grammars shorter and easier to read; every EBNF rule can be rewritten in BNF." }
    ]
  },
  {
    id: "3.6", title: "Abstract Syntax Trees", slides: ["L3", 27, 32],
    notes: [
      "<b>Ravi Sethi</b>: ASTs “are called abstract, because they show the syntactic structure of an expression <b>independent of the notation</b> in which the expression was originally written.”",
      "An <b>AST</b> is a finite, labeled tree: <b>internal nodes are labeled with operators</b>; <b>leaves represent operands</b>.",
      "An AST is <b>much simpler than a parse tree</b> and does <b>not have to deal with parsing problems</b>.",
      "Slide 28 shows the full parse tree for “3*4+2”. <i>Heads up:</i> the AST drawn on slide 29 has <code>*</code> at the root with children 3 and <code>+</code>(4, 2), which is <b>3*(4+2) = 18</b>, not 3*4+2.",
      "<b>Abstract grammar</b>: like a BNF grammar with a different notation. A nonterminal is declared to represent a certain type (<b>carrier</b>) of abstract phrase, e.g. <code>n ∈ intval</code>, <code>u ∈ boolval</code>, <code>e ∈ exp ::= e+e | e−e | e*e | e/e | −e | n</code>, <code>b ∈ bexp ::= b∧b | b∨b | e=e | e≤e | ¬b | u</code>.",
      "An AST node can have <b>more than two</b> subtrees: <code>e ∈ exp ::= e ? e : e</code> gives a node with 3 children, as in <code>(4 ≤ 2) ? 7 : 12</code>."
    ],
    quiz: [
      { q: "In an abstract syntax tree, internal nodes are labeled with…", c: ["operators", "operands", "nonterminals", "tokens only"], x: "Internal nodes are operators; leaves are operands." },
      { q: "In an AST, the leaves represent…", c: ["operands", "operators", "nonterminals", "grammar rules"], x: "Leaves are operands such as 3, 4 and 2." },
      { q: "According to Ravi Sethi, ASTs are called abstract because…", c: ["they show the structure independent of the notation in which the expression was written", "they are never implemented", "they contain only nonterminals", "they are drawn without edges"], x: "Abstract = independent of the original notation.", fig: "L3-27" },
      { q: "Compared with a parse tree, an AST is…", c: ["much simpler and does not have to deal with parsing problems", "more detailed, with every nonterminal shown", "the same thing", "only used for ambiguous grammars"], x: "Slide 29: much simpler than a parse tree; no parsing problems." },
      { q: "The AST on slide 29 has * at the root with children 3 and +(4, 2). What does it evaluate to?", c: ["18", "14", "9", "24"], x: "3 * (4 + 2) = 18. Note the slide labels it “3*4+2”, which would be 14.", fig: "L3-29" },
      { q: "In an abstract grammar, the type of abstract phrase a nonterminal represents is called its…", c: ["carrier", "token", "lexeme", "terminal"], x: "Slide 30: a nonterminal is declared to represent a certain type (carrier) of abstract phrase." },
      { q: "How many subtrees does the AST node for e ? e : e have?", c: ["3", "2", "1", "4"], x: "Condition, then-value, else-value: ASTs can branch into more than two subtrees.", fig: "L3-31" },
      { q: "What does (4 ≤ 2) ? 7 : 12 evaluate to?", c: ["12", "7", "4", "2"], x: "4 ≤ 2 is false, so the result is the third operand, 12." }
    ]
  }
  ]
},
{
  id: "L4", title: "Binding", sub: "Names, variables, binding time, lifetime, type checking, scope",
  sections: [
  {
    id: "4.1", title: "Names", slides: ["L4", 1, 9],
    notes: [
      "In Java we speak about <b>“late binding”</b> of methods. Variables are bound to value and type (“unification”).",
      "<b>Names</b> are used for variables, procedures, types, etc. Names are strings of characters, also called <b>identifiers</b>.",
      "<b>Design issues</b>: maximum length? are connector characters allowed? are names case sensitive? are special words reserved words or keywords?",
      "<b>Length</b>: if too short, names cannot be <b>connotative</b>. FORTRAN I max <b>6</b>; COBOL max <b>30</b>; FORTRAN 90 and ANSI C max <b>31</b>; Ada and Java <b>no limit, all significant</b>; C++ no limit, but implementors often impose one.",
      "<b>Connectors</b> (e.g. <code>_</code>): <b>Pascal, Modula-2 and FORTRAN 77</b> don't allow them; others do. Camel notation is used instead.",
      "<b>Case sensitivity</b>: disadvantage is <b>readability</b> (names that look alike are different). <b>C, C++ and Java</b> names are case sensitive.",
      "<b>Special words</b>: an aid to readability, used to delimit or separate statement clauses. A <b>keyword</b> is special <b>only in certain contexts</b> (disadvantage: poor readability, e.g. <code>Real Apple</code>, <code>Real = 3.4</code>). A <b>reserved word</b> is a special word that <b>cannot be used as a user-defined name</b>."
    ],
    quiz: [
      { q: "Names in programming languages are also called…", c: ["identifiers", "lexemes", "keywords", "tokens"], x: "Names are strings of characters, also called identifiers." },
      { q: "What was the maximum name length in FORTRAN I?", c: ["6", "30", "31", "No limit"], x: "FORTRAN I: 6. COBOL: 30. FORTRAN 90 and ANSI C: 31." },
      { q: "Which languages have no name-length limit, with all characters significant?", c: ["Ada and Java", "COBOL and FORTRAN I", "ANSI C and FORTRAN 90", "Pascal and Modula-2"], x: "Ada and Java: no limit, all are significant." },
      { q: "What is the maximum name length in COBOL?", c: ["30", "6", "31", "No limit"], x: "COBOL: maximum 30." },
      { q: "Which languages do NOT allow connector characters in names?", c: ["Pascal, Modula-2 and FORTRAN 77", "C, C++ and Java", "Ada and Java", "COBOL and Perl"], x: "Pascal, Modula-2 and FORTRAN 77 don't allow connectors." },
      { q: "The disadvantage of case-sensitive names is…", c: ["readability, because names that look alike are different", "slower execution", "names must be shorter", "they cannot be reserved words"], x: "Sum and sum would be different names." },
      { q: "A word that is special only in certain contexts is a…", c: ["keyword", "reserved word", "lexeme", "connector"], x: "Keywords are context dependent; reserved words can never be user-defined names." },
      { q: "A special word that cannot be used as a user-defined name is a…", c: ["reserved word", "keyword", "identifier", "token"], x: "Reserved words are off-limits as names." },
      { q: "C++ names have no length limit, but…", c: ["implementors often impose one", "only the first 6 characters count", "they must be uppercase", "connectors are not allowed"], x: "C++: no limit, but implementors often impose one." },
      { q: "Why are very short names a problem?", c: ["They cannot be connotative", "They use too much memory", "They are always reserved words", "They are case sensitive"], x: "Too-short names cannot suggest what they stand for." }
    ]
  },
  {
    id: "4.2", title: "Variables", slides: ["L4", 10, 12],
    notes: [
      "A <b>variable</b> is an <b>abstraction of a memory cell</b>. Not all variables have names (<b>anonymous</b> variables).",
      "Variables are a <b>6-tuple</b> of attributes: <b>(name, address, value, type, lifetime, scope)</b>. Name = identifier; address = memory address = <b>l-value</b>; value = r-value; lifetime = how long it is valid; scope = where it is visible.",
      "<b>Address</b> (l-value): a variable may have different addresses at different times during execution and at different places in a program. If two names can access the same memory location, they are <b>aliases</b>.",
      "<b>Type</b>: determines the <b>range of values</b> and the <b>set of operations</b>; for floating point, also the <b>precision</b>.",
      "<b>Value</b>: the contents of the location associated with the variable. <b>Abstract memory cell</b>: the physical cell or collection of cells associated with a variable."
    ],
    quiz: [
      { q: "A variable is an abstraction of…", c: ["a memory cell", "a function", "a register only", "a token"], x: "Slide 10: a variable is an abstraction of a memory cell." },
      { q: "Which is the 6-tuple of variable attributes?", c: ["Name, address, value, type, lifetime, scope", "Name, token, lexeme, type, value, rule", "Address, register, cache, disk, value, type", "Name, type, size, color, scope, owner"], x: "(name, address, value, type, lifetime, scope).", fig: "L4-10" },
      { q: "The address of a variable is also called its…", c: ["l-value", "r-value", "alias", "scope"], x: "l-value = address, r-value = value." },
      { q: "Two variable names that access the same memory location are called…", c: ["aliases", "keywords", "constants", "tokens"], x: "Aliases. Aliasing is also a reliability factor in Lecture 1." },
      { q: "A variable's type determines…", c: ["the range of values and the set of operations (and precision for floating point)", "only its memory address", "its scope", "how long it lives"], x: "Type: range of values, set of operations, and precision for floating point." },
      { q: "True or false: Every variable has a name.", c: ["False", "True"], x: "Not all variables have names; some are anonymous (e.g. heap cells reached by pointers)." },
      { q: "The physical cell or collection of cells associated with a variable is the…", c: ["abstract memory cell", "l-value", "scope", "binding"], x: "Slide 12: abstract memory cell." },
      { q: "True or false: A variable can have different addresses at different times during execution.", c: ["True", "False"], x: "E.g. a local variable gets a new stack address on each call." }
    ]
  },
  {
    id: "4.3", title: "Binding and Binding Time", slides: ["L4", 13, 15],
    notes: [
      "The <b>l-value</b> of a variable is its <b>address</b>; the <b>r-value</b> is its <b>value</b>.",
      "A <b>binding</b> is an association, such as between an attribute and an entity, or between an operation and a symbol. <b>Binding time</b> is the time at which a binding takes place.",
      "Binding times: <b>language design</b> time (<code>*</code> bound to multiplication); <b>language implementation</b> time (<code>int</code> bound to [−2<sup>k</sup>, …, 2<sup>k</sup>−1]); <b>compile</b> time (variable bound to type); <b>link</b> time (call to subprogram bound to subprogram address); <b>load</b> time (variable bound to storage cell); <b>run</b> time (variable bound to value).",
      "A binding is <b>static</b> if it first occurs <b>before run time</b> and remains unchanged throughout execution. It is <b>dynamic</b> if it first occurs <b>during execution</b> or <b>can change</b> during execution.",
      "An <b>explicit declaration</b> is a program statement used for declaring the types of variables. An <b>implicit declaration</b> is a <b>default mechanism</b> for specifying types of variables.",
      "<b>Dynamic type binding</b> (JavaScript and PHP): type specified through an assignment, e.g. <code>list = [2, 4.33, 6, 8];</code> then <code>list = 17.3;</code>. Advantage: <b>flexibility</b> (generic program units). Disadvantages: <b>high cost</b> (dynamic type checking and interpretation); type error detection by the compiler is difficult."
    ],
    quiz: [
      { q: "The r-value of a variable is its…", c: ["value", "address", "type", "name"], x: "l-value = address, r-value = value." },
      { q: "A binding is…", c: ["an association, such as between an attribute and an entity", "a type error", "a memory leak", "a grammar rule"], x: "Slide 13: an association between an attribute and an entity, or between an operation and a symbol." },
      { q: "When is * bound to the multiplication operation?", c: ["Language design time", "Compile time", "Load time", "Run time"], x: "The designers decide what * means.", fig: "L4-13" },
      { q: "When is a variable bound to a storage cell?", c: ["Load time", "Language design time", "Link time", "Compile time"], x: "Per the slide's table: load time.", fig: "L4-13" },
      { q: "When is a call to a subprogram bound to the subprogram's address?", c: ["Link time", "Load time", "Language implementation time", "Run time"], x: "The linker resolves calls to addresses.", fig: "L4-13" },
      { q: "Binding int to the range [−2^k, …, 2^k−1] happens at…", c: ["language implementation time", "language design time", "run time", "load time"], x: "The implementation picks the size of int.", fig: "L4-13" },
      { q: "A binding that first occurs before run time and remains unchanged is…", c: ["static", "dynamic", "implicit", "anonymous"], x: "Static: before run time, unchanged throughout execution." },
      { q: "A binding that first occurs during execution, or can change during execution, is…", c: ["dynamic", "static", "explicit", "reserved"], x: "Dynamic binding." },
      { q: "A default mechanism for specifying the types of variables is an…", c: ["implicit declaration", "explicit declaration", "alias", "coercion"], x: "Explicit = a declaration statement; implicit = a default mechanism." },
      { q: "In JavaScript, list = [2, 4.33, 6, 8]; then list = 17.3; shows…", c: ["dynamic type binding", "static type binding", "name type compatibility", "a reserved word"], x: "The type of list is set (and changed) by assignment." },
      { q: "The main advantage of dynamic type binding is…", c: ["flexibility (generic program units)", "low cost", "easy type error detection by the compiler", "faster execution"], x: "Flexibility. The costs: dynamic type checking/interpretation, and harder compile-time error detection." },
      { q: "Which is a disadvantage of dynamic type binding?", c: ["Type error detection by the compiler is difficult", "Programs cannot be generic", "Variables cannot change type", "It requires explicit declarations"], x: "Because types are only known at run time." }
    ]
  },
  {
    id: "4.4", title: "Lifetime", slides: ["L4", 16, 17],
    notes: [
      "The <b>lifetime</b> of a variable is the time during which it is <b>bound to a particular memory cell</b>.",
      "<b>Allocation</b>: getting a cell from some pool of available cells. <b>Deallocation</b>: putting a cell back into the pool.",
      "<b>Static</b>: binding starts at program start, ends at program end (e.g. <code>static</code> in Java).",
      "<b>Stack-dynamic</b>: starts when its <b>declaration is evaluated</b>, ends at end of block / return to callee (block-structured languages).",
      "<b>Explicit heap-dynamic</b>: starts and ends by <b>explicit command</b> (allocation / deallocation). <b>Ada, C, C++</b>.",
      "<b>Implicit heap-dynamic</b>: starts <b>when assigned a value</b>, ends when assigned another value. <b>Perl, JavaScript</b>."
    ],
    quiz: [
      { q: "The lifetime of a variable is…", c: ["the time during which it is bound to a particular memory cell", "the range of statements where it is visible", "the number of times it is assigned", "the length of its name"], x: "Lifetime is about storage binding. Visibility is scope." },
      { q: "Getting a cell from a pool of available cells is called…", c: ["allocation", "deallocation", "coercion", "aliasing"], x: "Allocation gets a cell; deallocation returns it." },
      { q: "A static variable's binding starts and ends…", c: ["at program start and program end", "when its declaration is evaluated and at end of block", "with explicit commands", "when assigned a value and when assigned another value"], x: "Static: program start to program end." },
      { q: "A stack-dynamic variable's binding starts when…", c: ["its declaration is evaluated", "the program starts", "an explicit allocation command runs", "it is assigned a value"], x: "Stack-dynamic: when the declaration is evaluated; ends at end of block/return.", fig: "L4-17" },
      { q: "Memory obtained with malloc and released with free in C is…", c: ["explicit heap-dynamic", "implicit heap-dynamic", "static", "stack-dynamic"], x: "Explicit commands allocate and deallocate: explicit heap-dynamic (Ada, C, C++)." },
      { q: "Which languages are given as examples of implicit heap-dynamic variables?", c: ["Perl and JavaScript", "Ada, C and C++", "Java (static)", "FORTRAN I"], x: "Implicit heap-dynamic: Perl, JavaScript.", fig: "L4-17" },
      { q: "An implicit heap-dynamic variable's binding ends when…", c: ["it is assigned another value", "the program ends", "an explicit deallocation command runs", "the block ends"], x: "Starts when assigned a value; ends when assigned another value." },
      { q: "Which lifetime category is associated with block-structured languages?", c: ["Stack-dynamic", "Static", "Explicit heap-dynamic", "Implicit heap-dynamic"], x: "Local variables in blocks are stack-dynamic." }
    ]
  },
  {
    id: "4.5", title: "Type Checking and Compatibility", slides: ["L4", 18, 19],
    notes: [
      "<b>Type checking</b> is the activity of ensuring that the operands of an operator are of <b>compatible type</b>.",
      "A <b>compatible type</b> is one that is either legal for the operator, or allowed under language rules to be <b>implicitly converted</b>, by compiler-generated code, to a legal type. This automatic conversion is called a <b>coercion</b>.",
      "A <b>type error</b> is the application of an operator to an operand of an inappropriate type.",
      "A language is <b>strongly typed</b> if type errors are <b>always detected</b>.",
      "<b>Name type compatibility</b>: two variables are compatible if they are in the <b>same declaration</b> or in declarations that use the <b>same type name</b>. <b>Easy to implement but highly restrictive</b>.",
      "<b>Structure type compatibility</b>: two variables are compatible if their types have <b>identical structure</b>. <b>More flexible but harder to implement</b>."
    ],
    quiz: [
      { q: "Type checking is the activity of ensuring that…", c: ["the operands of an operator are of compatible types", "every variable has a name", "every program terminates", "every name is unique"], x: "Slide 18's definition." },
      { q: "The automatic, implicit conversion of an operand to a legal type is called…", c: ["coercion", "casting by the programmer", "aliasing", "binding"], x: "Compiler-generated implicit conversion is coercion." },
      { q: "A type error is…", c: ["the application of an operator to an operand of an inappropriate type", "a misspelled reserved word", "a missing semicolon", "an ambiguous grammar"], x: "Slide 18's definition." },
      { q: "A programming language is strongly typed if…", c: ["type errors are always detected", "it has no coercions at all", "every variable is declared explicitly", "it uses dynamic type binding"], x: "Strongly typed = type errors are always detected." },
      { q: "Two variables in declarations that use the same type name are compatible under…", c: ["name type compatibility", "structure type compatibility", "coercion", "dynamic type binding"], x: "Name type compatibility: same declaration or same type name." },
      { q: "Which type compatibility rule is easy to implement but highly restrictive?", c: ["Name type compatibility", "Structure type compatibility", "Dynamic type compatibility", "Implicit compatibility"], x: "Name: easy but restrictive. Structure: flexible but harder." },
      { q: "Structure type compatibility means two variables are compatible if…", c: ["their types have identical structure", "they have the same name", "they are declared on the same line", "they are both integers"], x: "Identical structure; more flexible but harder to implement." },
      { q: "Which is TRUE about structure type compatibility?", c: ["More flexible but harder to implement", "Easy to implement but highly restrictive", "It requires the same type name", "It is the same as coercion"], x: "Slide 19." }
    ]
  },
  {
    id: "4.6", title: "Scope and Named Constants", slides: ["L4", 20, 22],
    notes: [
      "The <b>scope</b> of a variable is the range of statements over which it is <b>visible</b>. Local vs. global.",
      "Slide example: <code>public class C { private int x; private float y; void p(int z) { int a=5; x = a+z; } void q(float x) { y = x; } }</code>. In <code>p</code>, <code>x</code> is <b>nonlocal</b> (the field). In <code>q</code>, <code>y</code> is nonlocal, and the parameter <code>x</code> <b>hides</b> the field <code>x</code>.",
      "A <b>named constant</b> is a variable that is bound to a value only when it is bound to storage. Advantages: <b>readability and modifiability</b>."
    ],
    quiz: [
      { q: "The scope of a variable is…", c: ["the range of statements over which it is visible", "the time during which it is bound to a memory cell", "its memory address", "its type"], x: "Scope = visibility. Lifetime = storage binding." },
      { q: "In the slide's class C, inside method p, the variable x (in x = a+z) is…", c: ["nonlocal (the class field)", "local to p", "a parameter of p", "undeclared"], x: "x is declared in the class, not in p.", fig: "L4-20" },
      { q: "In method q(float x) { y = x; }, which x is used?", c: ["The parameter x, which hides the field x", "The class field x", "Both at once", "Neither, it is an error"], x: "The parameter's declaration hides the field of the same name.", fig: "L4-20" },
      { q: "In method q, the variable y is…", c: ["nonlocal", "local", "a parameter", "a named constant"], x: "y is the class field, so it is nonlocal in q.", fig: "L4-20" },
      { q: "A named constant is a variable that is bound to a value…", c: ["only when it is bound to storage", "every time it is assigned", "at link time only", "never"], x: "Slide 21's definition." },
      { q: "What are the advantages of named constants?", c: ["Readability and modifiability", "Speed and memory use", "Flexibility and generics", "Aliasing and coercion"], x: "Slide 21: readability and modifiability." },
      { q: "True or false: Scope and lifetime mean the same thing.", c: ["False", "True"], x: "Scope is where a variable is visible; lifetime is when it is bound to storage." }
    ]
  }
  ]
},
{
  id: "L5", title: "Evaluating PLs", sub: "Criteria table, simplicity, uniformity, orthogonality, abstraction, reliability, efficiency",
  sections: [
  {
    id: "5.1", title: "What Makes a Great PL", slides: ["L5", 1, 4],
    notes: [
      "There is <b>no standard set of criteria</b> for a great programming language. The list is a <b>suggested</b> one, not a hardlined one.",
      "Criteria are chosen around the need for a PL that produces <b>readable, writable and reliable</b> code. The set comes from <b>R.A. Finkel</b>'s and <b>R.W. Sebesta</b>'s lists.",
      "<b>Criteria table</b>: Readability ← simplicity, orthogonality, data types, syntax design. Writability ← all four of those + support for abstraction + expressivity. Reliability ← all of the above + type checking, exception handling, restricted aliasing.",
      "<b>Addenda</b>: <b>uniformity</b> (under writability and readability) and <b>efficiency</b> (under reliability)."
    ],
    quiz: [
      { q: "Is there a standard set of criteria for a great programming language?", c: ["No, the list is suggested rather than hardlined", "Yes, defined by ISO", "Yes, defined by Sebesta alone", "Only for compiled languages"], x: "Slide 2: there is no standard set of criteria." },
      { q: "Whose lists is the set of criteria taken from?", c: ["R.A. Finkel and R.W. Sebesta", "Dijkstra and Hoare", "Backus and Naur", "Stroustrup and Wirth"], x: "Slide 2." },
      { q: "Which characteristic affects ONLY reliability in the criteria table?", c: ["Type checking", "Simplicity", "Expressivity", "Syntax design"], x: "Type checking, exception handling and restricted aliasing are reliability only.", fig: "L5-03" },
      { q: "Support for abstraction and expressivity affect which criteria?", c: ["Writability and reliability", "Readability only", "Readability and writability only", "Reliability only"], x: "They have no dot under readability.", fig: "L5-03" },
      { q: "Which characteristics affect all three criteria?", c: ["Simplicity, orthogonality, data types, syntax design", "Type checking and exception handling", "Abstraction and expressivity", "Restricted aliasing only"], x: "The first four rows have dots in every column.", fig: "L5-03" },
      { q: "In the addenda, efficiency is placed under…", c: ["reliability", "readability", "writability", "cost"], x: "Slide 4: uniformity under writability and readability; efficiency under reliability." },
      { q: "In the addenda, uniformity is placed under…", c: ["writability and readability", "reliability only", "efficiency", "cost"], x: "Slide 4." }
    ]
  },
  {
    id: "5.2", title: "Simplicity, Uniformity, Orthogonality", slides: ["L5", 5, 7],
    notes: [
      "<b>Simplicity</b>: as few basic concepts as possible. Factors: <b>number of basic constructs</b>, <b>feature multiplicity</b> (many ways to do the same thing), <b>operator overloading</b>.",
      "<b>Uniformity</b>: basic concepts applied <b>consistently and universally</b>. Counterexample <b>Pascal</b>: constants can't be declared with values given by expressions, though expressions work everywhere else a value is needed; some <code>for</code> loops take a single statement as body while <code>repeat</code> loops take any number.",
      "<b>Orthogonality</b>: independent functions controlled by independent mechanisms; also, a relatively small set of primitive constructs can be combined to build control and data structures. Closely related to simplicity. The more orthogonal the design, the <b>fewer exceptions</b> the rules require."
    ],
    quiz: [
      { q: "Which is NOT listed as a factor affecting simplicity?", c: ["Exception handling", "Number of basic constructs", "Feature multiplicity", "Operator overloading"], x: "Slide 5 lists constructs, feature multiplicity and operator overloading." },
      { q: "Simplicity means there should be…", c: ["as few basic concepts as possible", "as many features as possible", "one way to write every program", "no operators"], x: "Slide 5." },
      { q: "“Basic concepts should be applied consistently and universally” defines…", c: ["Uniformity", "Orthogonality", "Expressivity", "Abstraction"], x: "Slide 6." },
      { q: "Which language is the counterexample for uniformity?", c: ["Pascal", "Java", "LISP", "C#"], x: "Slide 6: Pascal constants and loop bodies." },
      { q: "In Pascal, constants cannot be declared with values given by…", c: ["expressions", "integers", "characters", "literals"], x: "Even though expressions are accepted elsewhere a value is needed." },
      { q: "“Independent functions should be controlled by independent mechanisms” defines…", c: ["Orthogonality", "Uniformity", "Simplicity", "Modularity"], x: "Slide 7." },
      { q: "The more orthogonal a language design, the…", c: ["fewer exceptions the language rules require", "more exceptions the rules require", "slower it executes", "harder it is to read"], x: "Slide 7." },
      { q: "Orthogonality is closely related to…", c: ["simplicity", "aliasing", "efficiency", "exception handling"], x: "Slide 7." }
    ]
  },
  {
    id: "5.3", title: "Data Types and Syntax Design", slides: ["L5", 8, 9],
    notes: [
      "<b>Data types</b>: adequate facilities for defining data types and structures significantly aid <b>readability</b>. Example: an explicit <b>Boolean</b> type. Possible issue: the <b>orthogonality</b> of the PL.",
      "<b>Syntax design</b>: closely tied to <b>clarity</b>. Mechanisms should be well defined and the outcome of code easily predictable. Factors: <b>special words</b>, <b>form</b>, <b>meaning</b>."
    ],
    quiz: [
      { q: "Which example is given for data types aiding readability?", c: ["Explicitly having a Boolean data type", "Pointer arithmetic", "Implicit coercion", "goto statements"], x: "Slide 8." },
      { q: "A possible issue with adding data types is the PL's…", c: ["orthogonality", "efficiency", "cost", "portability"], x: "Slide 8." },
      { q: "Syntax design is closely tied to the concept of…", c: ["clarity", "efficiency", "aliasing", "recursion"], x: "Slide 9." },
      { q: "Which is NOT a factor in syntax design?", c: ["Garbage collection", "Special words", "Form", "Meaning"], x: "Slide 9: special words, form and meaning." }
    ]
  },
  {
    id: "5.4", title: "Abstraction and Expressivity", slides: ["L5", 10, 11],
    notes: [
      "<b>Abstraction</b>: a way to <b>factor out recurring patterns</b>, letting you define and then use complicated structures or operations while ignoring many details. Related: <b>information hiding</b>, <b>modularity</b>.",
      "<b>Expressivity</b>: relatively <b>convenient rather than cumbersome</b> ways of specifying computations. Examples: <b>short-circuit operators</b> and the <b>case</b> statement."
    ],
    quiz: [
      { q: "“A way to factor out recurring patterns” describes…", c: ["Abstraction", "Expressivity", "Orthogonality", "Aliasing"], x: "Slide 10." },
      { q: "Which concepts are related to abstraction?", c: ["Information hiding and modularity", "Aliasing and coercion", "Short-circuiting and case", "Compilation and interpretation"], x: "Slide 10." },
      { q: "Short-circuit operators and the case statement are examples of…", c: ["Expressivity", "Abstraction", "Uniformity", "Type checking"], x: "Slide 11." },
      { q: "Expressivity means a language has ___ ways of specifying computations.", c: ["relatively convenient rather than cumbersome", "as few as possible", "only one", "hardware-specific"], x: "Slide 11." }
    ]
  },
  {
    id: "5.5", title: "Reliability Features and Efficiency", slides: ["L5", 12, 15],
    notes: [
      "<b>Type checking</b>: testing for type errors, at <b>compile time</b> or during execution. Compile-time checking is <b>cheaper</b>, so more desirable.",
      "<b>Exception handling</b>: a program intercepts run-time errors, takes corrective measures, then <b>continues</b>. Examples: (most) OO languages. Bad examples: <b>Awk</b> and <b>SNOBOL</b> silently convert data types to apply operators.",
      "<b>Restricted aliasing</b>: aliasing = two or more distinct names accessing the <b>same memory cell</b>. Widely accepted as <b>dangerous</b>; some languages use it to overcome deficiencies in their data abstraction facilities.",
      "<b>Efficiency</b>: of compiling and executing. Related: compiler optimization, handling recursion at compile time, interpreted vs compiled languages, levels of abstraction."
    ],
    quiz: [
      { q: "Why is type checking at compile time more desirable?", c: ["It is cheaper", "It catches more logic errors", "It allows aliasing", "It is required by all languages"], x: "Slide 12." },
      { q: "Intercepting run-time errors, taking corrective measures, then continuing is…", c: ["Exception handling", "Type checking", "Aliasing", "Compiler optimization"], x: "Slide 13." },
      { q: "Which languages are given as bad examples for exception handling?", c: ["Awk and SNOBOL", "Java and C#", "Ada and C++", "FORTRAN and ALGOL"], x: "They silently convert data types to apply operators." },
      { q: "Aliasing is having two or more distinct names that access…", c: ["the same memory cell", "different memory cells", "the same type", "the same scope"], x: "Slide 14." },
      { q: "Some languages use aliasing to overcome deficiencies in their…", c: ["data abstraction facilities", "syntax", "compilers", "exception handling"], x: "Slide 14." },
      { q: "Which is NOT listed as related to efficiency?", c: ["Operator overloading", "Compiler optimization", "Interpreted vs. compiled languages", "Levels of abstraction"], x: "Operator overloading is a simplicity factor." },
      { q: "True or false: Aliasing is widely accepted as a dangerous feature.", c: ["True", "False"], x: "Slide 14." }
    ]
  },
  {
    id: "5.6", title: "Reporting Guidelines", slides: ["L5", 16, 16],
    notes: [
      "Report contents: <b>brief background</b> of the PL (history, facts, trivia); <b>sample code</b> for basic I/O, conditionals, iteration and recursion, and unique/special features; an <b>evaluation</b> of the PL based on this lecture.",
      "Format: <b>5–10 minute</b> presentation plus <b>5 minutes</b> open discussion (plus points for relevant questions)."
    ],
    quiz: [
      { q: "How long is the report presentation?", c: ["5–10 minutes, plus 5 minutes open discussion", "30 minutes", "1–2 minutes", "15 minutes, no discussion"], x: "Slide 16." },
      { q: "Which is NOT required in the sample codes?", c: ["A GUI application", "Basic input and output", "Conditionals", "Iteration and recursion"], x: "Slide 16 lists I/O, conditionals, iteration/recursion and unique features." }
    ]
  }
  ]
}

];
