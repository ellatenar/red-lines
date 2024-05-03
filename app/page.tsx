import styles from "./page.module.css"
import Hero from "./components/Hero"
import { unica } from "./fonts"
import classNames from "classnames"
import SectionDark from "./components/SectionDark"
import SectionLight from "./components/SectionLight"
import PullQuote from "./components/PullQuote"

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionDark>
        <h1 className={unica.className}>Red Lines</h1>
        <Hero />
        <div className={styles.intro}>
          In the months since October 7, Western media workers have faced a wave
          of retaliation for speaking up against or critically covering Israel’s
          war on Gaza—and in particular, for voicing support for Palestinians.
          In an effort to better understand the power dynamics and mechanisms
          behind the phenomenon, the National Writers Union tracked 44 cases of
          retaliation that impacted more than 100 media workers, who are
          disproportionately people of color.
        </div>
        <h3 className={classNames(styles.subheader, unica.className)}>
          About This Report
        </h3>
        <div className={styles.about}>
          <p>
            Since Hamas’s attack on October 7 and Israel’s subsequent military
            operations in Gaza, leaders of Western media companies and cultural
            institutions have acted to suppress the speech of media workers who
            seek to elevate Palestinian voices or express concern about Israel’s
            human rights violations. The National Writers Union (NWU) has
            compiled and verified 44 cases of retaliation that occurred between
            October 7, 2023 and February 1, 2024, which have affected more than
            100 people.
          </p>
          <p>
            The authors of this report define retaliation as any action taken by
            a venue, outlet, organization, or group that has negatively affected
            a media worker, and that was triggered by a perception that the
            worker’s speech and/or actions supported the Palestinian cause or
            criticized the government of Israel. Retaliatory action, as we
            define it, can come from leaders inside the workplace or from
            outside individuals or interest groups. These cases are particularly
            concerning in the context of intensifying retaliation beyond the
            media industry—whether in the form of{" "}
            <a href="https://www.theverge.com/24141073/columbia-doxxing-truck-student-encampment-palestine-israel">
              institutionally condoned harassment
            </a>
            ,{" "}
            <a href="https://apnews.com/article/columbia-protests-israel-palestinian-hirsi-cd80372939c7c08a40346e8b7d546da1">
              mass arrests
            </a>
            , or{" "}
            <a href="https://www.pbs.org/newshour/politics/georgia-lawmakers-pass-bill-that-would-define-antisemitism-in-state-law">
              legislative pushes
            </a>{" "}
            that could{" "}
            <a href="https://apnews.com/article/antisemitism-definition-states-law-zionism-indiana-georgia-871571f3b392455b1479827bdf1f5ea7">
              criminalize
            </a>{" "}
            criticism of Israel.
          </p>
          <p>
            The data collected by NWU suggests that this retaliation has
            disproportionately targeted media workers of color, particularly
            workers of Middle Eastern or North African descent and those who
            identify as Muslim. Three quarters of the cases where detailed
            demographic data was available involved people of color or Latinx
            people. More than a third of the targets of retaliation were Muslims
            or people of Middle Eastern or North African descent. These findings
            suggest that newsrooms’ grand gestures toward diversity, equity, and
            inclusion in recent years—especially since the police killing of
            George Floyd in 2020—have fallen short in this ongoing crisis or
            were superficial all along.
          </p>
          <PullQuote right>
            While the report’s findings are not comprehensive, they offer a
            window into what is likely a much more widespread, systemic
            phenomenon.
          </PullQuote>
          <p>
            The range of cases compiled in this report were drawn from news
            reports, social media posts, phone calls, and/or messages exchanged
            with affected individuals, as well as two surveys administered by
            NWU. The first survey asked workers to share their experiences of
            workplace retaliation for their support of Palestinians or view of
            the war on Gaza; the second asked workers whether and how they have
            self-censored speech on Israel and Palestine in response to the
            threat of retaliation. Every case included in the quantitative
            analysis was fact-checked. Incidents that could not be verified were
            left out of that analysis, as were incidents of potential
            retaliation that occurred or came to light after February 1. (At
            least one such case has resulted in a lawsuit.) While the report’s
            findings are not comprehensive, they offer a window into what is
            likely a much more widespread, systemic phenomenon that did not
            start in October 2023.
          </p>
          <p>
            The sample of impacted workers is as diverse as NWU’s membership,
            including freelancers, staffers, two editors-in-chief, early-career
            journalists, audio workers, a playwright, a Pulitzer-prize winning
            author, and media workers publishing with corporate, nonprofit, and
            academic organizations. The majority of cases concern media workers
            in the United States, yet given NWU’s international membership, they
            also include people from around the world, employed by outlets in
            Australia, Canada, the United Kingdom, and countries in Europe.
          </p>
          <p>
            In the West, there is a long history of suppressing Palestinian
            voices and viewpoints critical of Israel. But since October 7, this
            suppression has become one of the most urgent issues facing media
            workers. While Western media workers who have ties to the Middle
            East and North Africa and offer distinct insight into the war on
            Gaza are being muzzled and reprimanded—prevented from doing their
            jobs—Palestinian journalists on the ground are being killed en
            masse.
          </p>
          <p>
            As this report goes live, at least 102 Palestinian, four Israeli,
            and three Lebanese media workers have been killed in the region
            since October 7, according to the International Federation of
            Journalists (IFJ). The Israeli military has shown a blatant
            disregard for the lives of media workers in Gaza. In fact, there is
            clear evidence that the Israeli military has intentionally targeted
            those wearing press vests. For example, on October 13, Israeli
            forces targeted and killed a journalist and wounded six others,
            according to investigations from Reuters, AFP, Human Rights Watch,
            and Amnesty International. As a sister union of the Palestinian
            Journalists Syndicate, NWU condemns the deadly violence, smear
            campaigns, and deprivation that the Israeli state is currently
            inflicting on journalists in the entire Occupied Palestinian
            Territory and the surrounding region.
          </p>
          <p>
            The range of cases compiled in this report were drawn from news
            reports, social media posts, phone calls, and/or messages exchanged
            with affected individuals, as well as two surveys administered by
            NWU. The first survey asked workers to share their experiences of
            workplace retaliation for their support of Palestinians or view of
            the war on Gaza; the second asked workers whether and how they have
            self-censored speech on Israel and Palestine in response to the
            threat of retaliation. Every case included in the quantitative
            analysis was fact-checked. Incidents that could not be verified were
            left out of that analysis, as were incidents of potential
            retaliation that occurred or came to light after February 1. (At
            least one such case has resulted in a lawsuit.) While the report’s
            findings are not comprehensive, they offer a window into what is
            likely a much more widespread, systemic phenomenon that did not
            start in October 2023.
          </p>
          <p>
            The sample of impacted workers is as diverse as NWU’s membership,
            including freelancers, staffers, two editors-in-chief, early-career
            journalists, audio workers, a playwright, a Pulitzer-prize winning
            author, and media workers publishing with corporate, nonprofit, and
            academic organizations. The majority of cases concern media workers
            in the United States, yet given NWU’s international membership, they
            also include people from around the world, employed by outlets in
            Australia, Canada, the United Kingdom, and countries in Europe.
          </p>
          <p>
            In the West, there is a long history of suppressing Palestinian
            voices and viewpoints critical of Israel. But since October 7, this
            suppression has become one of the most urgent issues facing media
            workers. While Western media workers who have ties to the Middle
            East and North Africa and offer distinct insight into the war on
            Gaza are being muzzled and reprimanded—prevented from doing their
            jobs—Palestinian journalists on the ground are being killed en
            masse.
          </p>
          <p>
            As this report goes live, at least 102 Palestinian, four Israeli,
            and three Lebanese media workers have been{" "}
            <a href="https://www.ifj.org/war-in-gaza">killed</a> in the region
            since October 7, according to the International Federation of
            Journalists (IFJ). The Israeli military has shown a blatant
            disregard for the lives of media workers in Gaza. In fact, there is
            clear evidence that the Israeli military has intentionally targeted
            those wearing press vests. For example, on October 13, Israeli
            forces targeted and killed a journalist and wounded six others,
            according to investigations from Reuters, AFP, Human Rights Watch,
            and Amnesty International. As a sister union of the Palestinian
            Journalists Syndicate, NWU condemns the deadly violence, smear
            campaigns, and deprivation that the Israeli state is currently
            inflicting on journalists in the entire Occupied Palestinian
            Territory and the surrounding region.
          </p>
          <p>
            When management at media organizations keep their employees in the
            West from critically covering the Israeli government, highlighting
            extreme violence on social media, or advocating for the protection
            of their colleagues, they contribute to the escalating violence that
            is materially affecting the most vulnerable media workers in Gaza.
            They also risk undermining several core journalistic
            imperatives—including the imperative to minimize harm. In other
            words, retaliation is just as much a media ethics issue as it is a
            labor issue.
          </p>
        </div>

        <h3 className={classNames(styles.subheader, unica.className)}>
          More Information and Opportunities for Action:
        </h3>
        <div>
          For updates on the Freelance Solidarity Project’s organizing around
          retaliation and violence against media workers, sign up{" "}
          <a href="https://forms.gle/URqowjyicoy8kYFA8">here</a>. To report an
          incident of retaliation, fill out{" "}
          <a href="https://forms.gle/YFVkEWB53Re9F7k86">this survey</a>. Or to
          organize with us,{" "}
          <a href="https://nwu.org/join-now/">
            join the National Writers Union
          </a>
          .
        </div>
      </SectionDark>
    </main>
  )
}
