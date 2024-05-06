import Button from "../components/Button"
import { Heading, Subheading } from "../components/Headings"
import PullQuote from "../components/PullQuote"
import SectionDark from "../components/SectionDark"
import { Metadata } from "next"
import { links } from "../links"

export const metadata: Metadata = {
  title: "Recommendations",
}

export default function Recommendations() {
  return (
    <main>
      <SectionDark>
        <Heading>Recommendations</Heading>
        <p>
          The following recommendations were drafted by members of NWU
          organizing via the Freelance Solidarity Project (FSP). We believe in
          the power of unions to counter retaliation within newsrooms and
          workplaces and defend workers’ and citizens’ rights to dissent at
          local, national, and international levels. While these recommendations
          involve changes in policy and practice by political leaders and media
          organizations, organized workers play a key role in making these
          demands a reality.
        </p>
        <Subheading id={"1"}>For Political Leaders:</Subheading>
        <PullQuote noPadding>
          Institute an immediate and permanent ceasefire in Gaza, release all
          political prisoners, halt U.S. military funding for Israel, and
          guarantee access and protection for journalists in the region.
        </PullQuote>
        <p>
          Media workers in Gaza and the surrounding region will not be safe
          until Israel’s devastating military campaign ends. UN human rights
          experts have been{" "}
          <a href="https://www.ohchr.org/en/press-releases/2023/10/gaza-un-experts-decry-bombing-hospitals-and-schools-crimes-against-humanity">
            raising
          </a>{" "}
          the alarm since October that Palestinians are at “a risk for
          genocide.” In recent months, these experts have repeatedly{" "}
          <a href="https://www.axios.com/2024/04/11/us-official-famine-northern-gaza">
            cautioned
          </a>{" "}
          that Israel’s blockade on aid to Gaza leaves Palestinians at risk for
          or already experiencing famine. Children have already{" "}
          <a href="https://www.theguardian.com/world/2024/apr/15/babies-children-gaza-famine">
            died
          </a>{" "}
          of starvation, in addition to the thousands who have died as a result
          of Israeli bombings and ground operations. As we go to press, more
          than 34,000 people have been killed in Gaza.
        </p>
        <p>
          A ceasefire, release of hostages and political prisoners, and
          unfettered access to food and medical aid for Palestinians are
          baseline conditions for media workers in Gaza and the rest of the
          Occupied Palestinian Territory. In addition, Israeli and U.S. leaders
          must guarantee that journalists working covering Israel and Palestine
          are protected from military attacks, as{" "}
          <a href="https://safety.rsf.org/appendix-i-protection-of-journalists-in-war-zones/#:~:text=Under%20Article%2079%20of%20Additional,no%20part%20in%20the%20hostilities">
            mandated
          </a>{" "}
          under international human rights law. As the{" "}
          <a href="https://www.nytimes.com/2024/04/10/world/middleeast/israel-weapons-suppliers-us-germany-italy.html">
            largest supplier
          </a>{" "}
          of military support to Israel, the United States must use its leverage
          by halting financial aid and weapons shipments that are used to{" "}
          <a href="https://www.vox.com/world-politics/2023/11/18/23966137/us-weapons-israel-biden-package-explained">
            kill
          </a>{" "}
          Palestinians. Further, all incidents in which Israeli military actions
          have resulted in the deaths or injuries of journalists and their
          families need to be independently investigated. Finally, Israel must{" "}
          <a href="https://pressgazette.co.uk/news/gaza-journalists-foreign-correspondents-israel-egypt-access/">
            end
          </a>{" "}
          its blockade on international journalists entering the Gaza Strip.
        </p>
        <Subheading id={"2"}>For Western Media Outlets:</Subheading>
        <PullQuote noPadding>
          Proactively hire, retain, and listen to media workers impacted by the
          war on Gaza.
        </PullQuote>
        <p>
          There is a long history of retaliation against Middle Eastern, North
          African, and Muslim people for{" "}
          <a href="https://www.aljazeera.com/news/2022/2/11/career-assassination-dws-scapegoating-of-arab-employees">
            expressing
          </a>{" "}
          solidarity with the Palestinian people or{" "}
          <a href="https://www.inquirer.com/news/agnes-irwin-fires-pro-palestine-employee-20220823.html">
            criticizing
          </a>{" "}
          Israeli state action. It does not happen in a vacuum. Research{" "}
          <a href="https://core.ac.uk/download/pdf/219378467.pdf">suggests</a>{" "}
          that Muslims and Arabs are among the most dehumanized groups in the
          United States and that hatred towards these groups tends to{" "}
          <a href="https://freelancesolidarity.org/events/behind-enemy-lines/">
            rise
          </a>{" "}
          following certain types of terrorist attacks, as it{" "}
          <a href="https://news.gallup.com/poll/157082/islamophobia-understanding-anti-muslim-sentiment-west.aspx">
            did
          </a>{" "}
          after 9/11 and the 2013 Boston Marathon bombing. Anti-Arab and
          anti-Muslim sentiment also corresponds with support for foreign policy
          actions, such as drone strikes in the Middle East or the torture of
          Arab and Muslim detainees. In the first three months of the war on
          Gaza, complaints to the Council on American-Islamic Relations of
          anti-Muslim and anti-Palestinian hate and discrimination{" "}
          <a href="https://www.reuters.com/world/us/anti-muslim-incidents-jump-us-amid-israel-gaza-war-2024-01-29/">
            rose
          </a>{" "}
          by 178 percent.
        </p>
        <p>
          Amid this pressure, those with ties to the region and its cultures—to
          Gaza in particular—have a distinct vantage point on the war on Gaza
          and can{" "}
          <a href="https://www.washingtonpost.com/national/religion/muslim-journalists-no-longer-as-rare-in-us-newsrooms/2016/01/12/4c0ddff8-b97d-11e5-85cd-5ad59bc19432_story.html">
            contribute
          </a>{" "}
          immense value to media organizations striving to{" "}
          <a href="https://cronkitenewslab.com/digital/2023/01/26/beyond-objectivity/">
            build
          </a>{" "}
          trust and{" "}
          <a href="https://www.poynter.org/ethics-trust/2023/why-trust-in-journalism-is-so-low-and-how-to-fix-it/">
            engage
          </a>{" "}
          with communities on the ground that are experiencing disproportionate
          and ongoing harm.
        </p>
        <p>
          Media organizations must take proactive steps to protect such workers
          from retaliation, harassment, and harm. They should also track the
          diversity of their workforces—including details about which workers
          are receiving high-profile, high-reward opportunities—and make that
          data public.
        </p>
        <p>
          Further, publications should invite Middle Eastern, North African, and
          Muslim workers to provide input on their coverage of Israel and
          Palestine. For information about how newsrooms can more accurately
          cover the war on Gaza, see the media resource guide{" "}
          <a href="https://www.ameja.org/Media-Resource-Guide-for-Palestine-Israel">
            compiled
          </a>{" "}
          by members of the Arab and Middle Eastern Journalists Association.
        </p>
        <PullQuote noPadding>
          Stand up to efforts by interest groups to label criticism of Zionism
          or Israel as antisemitism.
        </PullQuote>
        <p>
          Media organizations and cultural institutions should anticipate and
          resist pressure from pro-Israeli interest groups like Canary Mission,
          StopAntisemitism.Org, HonestReporting, and CAMERA. Such groups
          routinely label speech critical of Israel or supportive of
          Palestinians as antisemitic and seek to influence employers to
          discipline or dismiss crucial media workers. When employers bow to
          such pressure, it is often Middle Eastern, North African, and Muslim
          workers, particularly workers of color, who pay the price. We call on
          all media organizations to stand by their employees and freelancers in
          the face of attempted character assassinations and smear campaigns.
        </p>
        <p>
          Media organizations must make a public commitment to resisting
          pressure from interest groups. Organizations should publicly and
          transparently document attempted pressure, as part of their commitment
          to journalistic ethics. Media industry employers can work together, in
          collaboration with media unions, to resist these pressure groups.
        </p>
        <PullQuote noPadding>
          Re-examine policies related to political speech and the
          disproportionate impact of such policies on marginalized workers.
        </PullQuote>
        <p>
          NWU’s data suggest that, in the case of Israel and Palestine, policies
          and practices designed to limit political speech are
          disproportionately impacting workers from marginalized backgrounds and
          identities. In light of this, newsrooms must critically re-examine
          their policies regarding political speech and social media. Achieving
          true diversity and inclusion will require identifying disparities and
          double standards in company attitudes and procedures.
        </p>
        <p>
          Policy changes should be made with input from rank-and-file workers,
          particularly staffers and freelancers who are most likely to be
          impacted, and clearly communicated to those workers. Policies that
          cannot be enforced equitably, or that reflect built-in bias, should be
          discontinued.
        </p>
        <p>
          Finally, freelancers should not be subject to the same restrictions on
          political speech as staffers; it is inequitable to enforce the same
          restrictions on workers who lack the same benefits and security as
          staff.
        </p>
        <PullQuote noPadding>Rethink “objectivity.”</PullQuote>
        <p>
          In an era when newsroom leaders{" "}
          <a href="https://www.pewresearch.org/journalism/2022/06/14/journalists-give-industry-mixed-reviews-on-newsroom-diversity-lowest-marks-in-racial-and-ethnic-diversity/">
            claim
          </a>{" "}
          to be striving for increased diversity, media organizations must{" "}
          <a href="https://www.nytimes.com/2020/06/23/opinion/objectivity-black-journalists-coronavirus.html">
            rethink
          </a>{" "}
          what objectivity actually looks like—instead of{" "}
          <a href="https://www.washingtonpost.com/lifestyle/style/how-one-reporters-rejection-of-objectivity-got-him-fired/2017/02/01/bc5cc9c6-e7ef-11e6-80c2-30e57e57e05d_story.html">
            penalizing
          </a>{" "}
          marginalized workers for speaking truth to power. At the same time
          that Middle Eastern, North African, and Muslim workers are facing
          discipline for perceived bias in their perspectives on Gaza, reporters
          who have{" "}
          <a href="https://www.thedailybeast.com/new-york-times-reviewing-reporter-anat-schwartz-for-liking-gaza-slaughterhouse-tweet">
            worked
          </a>{" "}
          for Israeli state institutions, including the military, have been
          invited to{" "}
          <a href="https://lithub.com/journalism-as-a-front-of-war-on-american-media-and-the-ideology-of-the-status-quo/">
            cover
          </a>{" "}
          sensitive stories repeatedly. In some cases, bias is{" "}
          <a href="https://www.readthemaple.com/western-media-doesnt-want-you-to-read-the-word-palestine/">
            institutionalized
          </a>
          , as in the use of style guides that{" "}
          <a href="https://theintercept.com/2024/04/15/nyt-israel-gaza-genocide-palestine-coverage/">
            favor
          </a>{" "}
          Israeli perspectives, or in allowing the IDF’s military censor to{" "}
          <a href="https://theintercept.com/2024/01/04/cnn-israel-gaza-idf-reporting/">
            review
          </a>{" "}
          and perhaps even shape coverage.
        </p>
        <p>
          Media organizations should{" "}
          <a href="https://www.washingtonpost.com/opinions/2023/01/30/newsrooms-news-reporting-objectivity-diversity/">
            undertake
          </a>{" "}
          transparent reviews of their policies and practices pertaining to
          objectivity and bias, with input from workers, and make public the
          results of those reviews. In addition, where feasible, media
          organizations should employ a public editor to advocate for fair and
          balanced reporting. All this amounts to an overdue reckoning that many
          journalists, especially those from marginalized backgrounds, have been
          demanding for a long time.
        </p>
        <PullQuote noPadding>Support and protect freelancers.</PullQuote>
        <p>
          Freelancers are uniquely vulnerable to retaliation for their political
          speech, due to their already precarious working conditions. At the
          very least, any policies that freelancers are expected to adhere to
          should be clearly outlined when their contracts are established.
          Contracts should provide strong protections against financial harm
          resulting from the cancellation of an assignment due to external
          circumstances. They should also clearly outline pathways to file
          grievances if a freelancer suspects retaliation for political speech
          or other unfair practices. Media organizations should{" "}
          <a href="https://freelancesolidarity.org/actions-campaigns/principles-work-freelancers/">
            follow
          </a>{" "}
          the Freelance Solidarity Project’s{" "}
          <a href="https://freelancesolidarity.org/actions-campaigns/principles-work-freelancers/">
            Principles for Working With Freelancers
          </a>{" "}
          and collaborate with NWU and freelancers to{" "}
          <a href="https://freelancesolidarity.org/actions-campaigns/unilateral-announcements/">
            outline
          </a>{" "}
          agreed-upon working conditions, via unilateral announcements.
        </p>
        <PullQuote noPadding>Support unions.</PullQuote>
        <p>
          Media organizations should voluntarily recognize union elections and
          bargain contracts in good faith.
        </p>
        <Subheading id={"3"}>For Workers and Unions:</Subheading>
        <PullQuote noPadding>Organize a union at your workplace.</PullQuote>
        <p>
          Multiple cases in our analysis demonstrate the power of unions to
          protect workers from retaliation and arbitrary discipline. We
          encourage all media workers to continue the urgent business of
          organizing in order to fight the current wave of retaliation and
          prevent those targeted on the basis of their identity from being
          further isolated. Media workers in non-unionized workplaces can reach
          out to the NewsGuild at{" "}
          <a href="mailto:organize@newsguild.org">organize@newsguild.org</a> or
          the Writers Guild via Justin Molito at{" "}
          <a href="mailto:jmolito@wgaeast.org">jmolito@wgaeast.org</a> to
          discuss confidentially.
        </p>
        <PullQuote noPadding>
          Already have a union? Demand protection against retaliation.
        </PullQuote>
        <p>
          First:{" "}
          <a href="https://drive.google.com/file/d/1P9WWAWVp9HAHLMCanwhNFirYeScEi2K9/view?usp=sharing">
            Know
          </a>{" "}
          your{" "}
          <a href="https://www.nlrb.gov/about-nlrb/rights-we-protect/your-rights/weingarten-rights">
            rights
          </a>
          .
        </p>
        <p>
          Then: Use the power of your union to expand those rights. Use contract
          negotiations to demand specific protections against retaliation. “Just
          Cause” contract provisions, for example, can{" "}
          <a href="https://www.labornotes.org/2019/01/using-just-cause-defend-against-unfair-discipline">
            protect workers
          </a>{" "}
          from politically motivated or arbitrary firings in retaliation for
          speech. Organize strong internal support networks or affiliation
          groups so that workers of marginalized identities are not easily
          isolated. Advocate for greater transparency and distributed power over
          editorial guidelines and decisions.
        </p>
        <p>
          Unions should also be dogged and relentless about filing grievances on
          behalf of workers who have been disciplined for their speech. If the
          costs of retaliation begin to outweigh employers’ desire to control
          their workers, retaliation will become less common.
        </p>
        <p>
          Workers can also use the power of their unions to demand transparency
          about the external forces that result in retaliation against their
          colleagues, such as editors’ or management’s ties to political
          advocacy, or pressures editors have faced from outside groups.
          Overall, workers should examine the recommendations in this report and
          consider how they can use their knowledge of their workplace and the
          collective power of their union to push for change.
        </p>
        <PullQuote noPadding>
          Organize across the industry to fight retaliation and build
          solidarity.
        </PullQuote>
        <p>
          Media unions should forge alliances with other unions and labor groups
          to resist retaliation against political speech as a workplace justice
          issue. Legislation to end “at will” employment even for non-union
          workers could{" "}
          <a href="https://rooseveltinstitute.org/wp-content/uploads/2021/01/RI_AtWill_Report_202101.pdf">
            radically change
          </a>{" "}
          the power dynamics of Western media workplaces. Unions can play a
          central role in bringing those{" "}
          <a href="https://www.nelp.org/new-report-just-cause-reforms-broadly-popular-offer-solutions-to-workplace-racial-inequity/">
            highly popular
          </a>{" "}
          reforms to bear and broadening their reach, including at the{" "}
          <a href="https://www.nelp.org/cities-are-working-to-end-another-legacy-of-slavery-at-will-employment/">
            local
          </a>{" "}
          level. Staff unions should reach out to non-unionized and freelance
          media workers, including those organizing with NWU, to build
          industry-wide support systems that protect the most vulnerable workers
          against retaliation.
        </p>
        <p>
          Finally, we encourage media unions to{" "}
          <a href="https://truthout.org/articles/the-international-labor-movement-is-mobilizing-for-a-free-palestine/">
            answer
          </a>{" "}
          calls for solidarity from unions{" "}
          <a href="https://twitter.com/WorkersinPales1/status/1713908923848130880?s=20">
            representing
          </a>{" "}
          Palestinian workers, and from unions throughout the United States and
          Europe that are{" "}
          <a href="https://secure.everyaction.com/w1qW7B3pek2rTtv9ny5bqw2">
            organizing
          </a>{" "}
          strategically to{" "}
          <a href="https://www.ueunion.org/political-action/2023/ue-helps-initiate-labor-call-for-ceasefire-in-israel-and-palestine">
            interrupt
          </a>{" "}
          the war machine and end the violence that threatens the lives of our
          union siblings in Palestine. For example, unions should{" "}
          <a href="https://www.thenation.com/article/world/palestine-journalists-syndicate-interview/">
            support
          </a>{" "}
          the legal{" "}
          <a href="https://www.ifj.org/media-centre/blog/detail/article/ifjblog-international-criminal-court-holds-key-to-curb-killing-of-journalists-in-israel-hamas-war">
            efforts
          </a>{" "}
          by the International Federation of Journalists and the Palestinian
          Journalists Syndicate for the International Criminal Court to{" "}
          <a href="https://www.ifj.org/media-centre/news/detail/category/press-releases/article/palestine-icc-case-filed-over-systematic-targeting-of-palestinian-journalists">
            investigate
          </a>{" "}
          Israel’s pattern of killing journalists. Workers can also{" "}
          <a href="https://donorbox.org/donation-to-the-ifj-safety-fund">
            donate
          </a>{" "}
          to the International Federation of Journalists’{" "}
          <a href="https://www.ifj.org/media-centre/news/detail/category/press-releases/article/palestine-give-now-to-keep-gazas-cameras-rolling">
            Safety Fund
          </a>
          .
        </p>
        <PullQuote noPadding>
          Freelancers: Join the National Writers Union.
        </PullQuote>
        <p>
          Freelancers are largely left out of the protections afforded to staff
          members under union contracts. The increasing precarity and volatility
          of media industry employment is a background condition throughout this
          report, as hundreds of media workers have been{" "}
          <a href="https://www.fastcompany.com/91035879/news-media-layoffs-2024-list-growing-worst-year-financial-crisis">
            laid off
          </a>{" "}
          since October 2023. The decline of unionized staff jobs means that
          journalists in general will be increasingly vulnerable to retaliation
          and targeting, unless freelancers organize to protect themselves and
          one another. Freelance media workers should get in touch with the
          Freelance Solidarity Project, organized under the Digital Media
          Division of the National Writers Union, at{" "}
          <a href="mailto:freelance.solidarity.project@gmail.com">
            freelance.solidarity.project@gmail.com
          </a>{" "}
          and <a href="https://nwu.org/join-now/">join</a> the union.
        </p>
        <Subheading id={"4"}>
          More Information and Opportunities for Action:
        </Subheading>
        <p>
          For updates on the Freelance Solidarity Project’s organizing around
          retaliation and violence against media workers,{" "}
          <a href="https://forms.gle/URqowjyicoy8kYFA8">sign up here</a>. To
          report an incident of retaliation, fill out this{" "}
          <a href="https://forms.gle/YFVkEWB53Re9F7k86">survey</a>. Or to get
          involved, <a href="https://nwu.org/join-now/">join</a> the National
          Writers Union.
        </p>
        <Button navItem={links[5]} />
      </SectionDark>
    </main>
  )
}
