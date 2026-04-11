import Image from "next/image";

const team = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA52PtbY1oRMOU5nCVZB6K_895w5OufdmQrgnuATCeAP1lf9ItYGeg-pmarnh2VbzAmJ1tqeKiKAAFXD1ZErLBAwPPpD5NxY4qH8spH61DmmnQBgk67-p3RbSfIvi4_oae_qG4a2FpdOflbr3-kln8dzpsZxb3OyZ_zLzjQEkEpQdKZNh6303Lw-dED9EyGd24flBT3wX6RAblj2W_ClbwzfPhBULpZwl9QOy2axQ6FKd_9I7Zwu01vSfg62tejD5CGZ2wfo16M61M",
    name: "Advisor",
    role: "Investment Strategy",
    zh: "資產配置專家",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV_D57NKdt-DhdT1jD2h72BZpqKK3Y17rXyGsskKITganxXbi3AIDys0nNb5x4lUZj0LHtLpj3fy3HW-3UJ1-UY0wYMiEEzT6Cu05zoFCcRBUmJGDuHoW3JsptKsenFvRq2ndhqiGiHfnoVKRKHhkt9cOg7hwEq0ZocLUy82gAp584LHCNRVSDCf6jUtqUrb5pQ38s-jXvhu6U0QdEdjayYAUmcAVXfHgfv8lDdverXkpEWM9EKEn9BAlqa96r7t1vKaK7XRSftmE",
    name: "Legal Counsel",
    role: "Compliance & Tax",
    zh: "跨國法律顧問",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ppqeG4jyrYlshJnTPvJiGeXrZBPWNAVmZbdz_5ZN_89G1gE_f-AYOCxFGREV203xco1dcV3odw7_b4frwK4Ku87k3Wkow_pTQfsa3kxNx81F_LiK_p35bev87jPbrLxkEmbCKoBlnMExf-LB5gSxVH7gO3Ig86wgyqXrfaFCx5ua4JuMXO59McTrrzb5Ew1iscYOn2RrLzQ-0bpoTt2ShGQ3TBZN2mOK3ScXspsDIRAdqp5zGIcnEfd2EVu7P9k-btJELoKaROQ",
    name: "CPA",
    role: "Financial Planning",
    zh: "註冊會計師",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKU_0-Ky4HKk8NH2R8GrOe1M1QwBEG1IjJhA_HEVlcRoXa1iytozVHJmCbI6HEhY4flT-8Jl9CUksnmRL_HYneAQgZE1d6k27ofgEDcCrfnFYd0MOG8o27Uvkj_ydCrs0dOqeTmtDSrb75g1zyLQWzZycG9w7RPlhXrzg_QwINCf27roXZ6QM-eRew_f7nfKKeISJ2tCvE0h9TIjopq4UElxoDl4v0eaH4Qkq7z6Q3Z6lOA5ExpI4Yl2ERBkHlXQjwhYxhlmByAs",
    name: "Real Estate Agent",
    role: "Local Acquisition",
    zh: "當地資深經紀人",
  },
];

export default function Team() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold text-primary mb-4">
          Your Professional Council
          <br />
          <span className="text-secondary font-medium text-xl">一站式專家顧問團</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          我們與頂尖的法律、財務及地產專家緊密合作，確保您的投資每一步都穩健無虞。
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m) => (
          <div key={m.name} className="text-center group">
            <div className="w-32 h-32 mx-auto rounded-full bg-surface-container overflow-hidden mb-4 border-2 border-transparent group-hover:border-secondary transition-all">
              <Image
                src={m.img}
                alt={m.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="font-bold text-primary">{m.name}</h5>
            <p className="text-xs text-secondary font-bold mb-1">{m.role}</p>
            <p className="text-xs text-on-surface-variant">{m.zh}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
