type ResearchTeam = {
    name: string;
    icon: string;
    description: string;
    inspiration: string;
    focus: string[];
    members: string[];
};

const TEAMS: ResearchTeam[] = [
    {
        name: "Thunderbolts",
        icon: "bi bi-lightning-charge-fill",
        description:
            "Equipe dedicada a projetos internos e de desenvolvimento web. Este site foi desenvolvido por membros desta equipe!",
        inspiration: "Buscando o melhor para o nosso GPMecatrônica",
        focus: ["Projetos internos", "Desenvolvimento web"],
        members: [],
    },
    {
        name: "Lovelaces",
        icon: "bi bi-cpu-fill",
        description:
            "Equipe especializada em robótica, programação e sistemas computacionais. Medalhistas na Olimpíada Brasileira de Robótica na modalidade artística.",
        inspiration: "Em homenagem a Ada Lovelace, pioneira da computação",
        focus: ["Robótica artística", "Programação embarcada"],
        members: [],
    },
    {
        name: "Pascalinos",
        icon: "bi bi-calculator-fill",
        description:
            "Equipe voltada para robótica. Participantes na Olimpíada Brasileira de Robótica na modalidade artística, além de projetos internos.",
        inspiration: "Em homenagem a Blaise Pascal, gênio da matemática",
        focus: ["Robótica artística", "Programação embarcada"],
        members: ["Thiago Macedo", "Isaque Simões", "Anna Júlia", "Lucas Araújo"],
    },
];

function TeamCard({ team, index }: { team: ResearchTeam; index: number }) {
    return (
        <div key={team.name} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
            <div className="tw:group tw:bg-white tw:p-10 tw:shadow-lg tw:h-full tw:relative tw:transition-all tw:duration-300 hover:tw:shadow-xl">
                <div className="tw:w-12 tw:h-12 tw:relative tw:mb-12">
                    <i
                        className={`${team.icon} tw:text-5xl tw:text-gray-700 tw:relative tw:z-10 tw:transition-colors tw:duration-300 tw:group-hover:text-gray-900`}
                    />
                    <div className="tw:absolute tw:w-full tw:h-full tw:bg-gray-100 tw:rounded-full tw:top-2 tw:-right-5 tw:z-0 tw:transition-colors tw:duration-300 tw:group-hover:bg-accent/50" />
                </div>

                <h3 className="tw:text-xl tw:font-bold tw:text-gray-800 tw:mb-5 tw:pb-2 tw:border-b-4 tw:border-gray-200 tw:inline-block tw:transition-colors tw:duration-300 tw:group-hover:border-accent tw:group-hover:text-gray-900">
                    {team.name}
                </h3>

                <p className="tw:text-sm tw:leading-6 tw:text-gray-600 tw:mb-0">
                    {team.description}
                </p>

                <p className="tw:italic tw:text-xs tw:text-gray-500 tw:mt-3">
                    {team.inspiration}
                </p>

                <FocusAreaList items={team.focus} />

                {team.members.length > 0 && <MemberList members={team.members} />}
            </div>
        </div>
    );
}

function FocusAreaList({ items }: { items: string[] }) {
    return (
        <div className="tw:mt-4">
            <strong className="tw:text-sm tw:text-gray-800">Áreas de Foco:</strong>
            <ul className="tw:mt-2 tw:pl-5 tw:list-disc">
                {items.map((item) => (
                    <li key={item} className="tw:text-sm tw:leading-6 tw:text-gray-600">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function MemberList({ members }: { members: string[] }) {
    return (
        <div className="tw:mt-3">
            <strong className="tw:text-sm tw:text-gray-800">Membros:</strong>
            <div className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-1.5">
                {members.map((member) => (
                    <span
                        key={member}
                        className="tw:relative tw:cursor-default"
                    >
                        <span className="tw:text-xs tw:px-2.5 tw:py-1 tw:bg-accent/10 tw:text-accent tw:inline-block">
                            {member.split(" ")[0]}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export function ResearchTeams() {
    return (
        <section id="research-teams" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Equipes de Pesquisa</h2>
                <p>
                    Conheça as equipes especializadas do GPMecatrônica, cada uma focada em
                    áreas específicas de pesquisa e desenvolvimento tecnológico.
                </p>
            </div>

            <div className="container">
                <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6">
                    {TEAMS.map((team, index) => (
                        <TeamCard key={team.name} team={team} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
