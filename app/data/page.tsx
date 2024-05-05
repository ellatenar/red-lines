/* eslint-disable react/no-unescaped-entities */
import styles from "./Data.module.css"
import Image from "next/image"
import graphic1 from "@/public/images/retaliation_graphic_what_forms.png"
import graphic2 from "@/public/images/retaliation_graphic_how_many.png"
import graphic3 from "@/public/images/retaliation_graphic_who.png"
import SectionDark from "../components/SectionDark"
import PullQuote from "../components/PullQuote"
import { Heading, Subheading } from "../components/Headings"
import { Metadata } from "next"
import WhatForms from "../components/Graphics/WhatForms"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export const metadata: Metadata = {
  title: "Data",
}

export default function Data() {
  return (
    <main>
      <SectionDark>
        <Heading>The Data</Heading>
        <div className={styles.graphicsContainer}>
          <Image
            src={graphic1}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />

          <Image
            src={graphic2}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <Image
            src={graphic3}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Subheading>Summary of Results</Subheading>
        <p>
          NWU’s investigation identified widespread retaliation against media
          workers in response to the perception that they support the
          Palestinian cause or are critical of the Israeli government. Our
          online research, interviews with workers, and surveys did not unearth
          a similarly pervasive trend for media workers facing retaliation for
          speech perceived as supportive of Israel. In some cases, retaliation
          was driven by allegations of antisemitism—often by{" "}
          <a href="https://www.aljazeera.com/news/2023/12/6/anti-zionism-is-antisemitism-us-house-asserts-in-dangerous-resolution">
            organizations
          </a>{" "}
          and{" "}
          <a href="https://www.thenation.com/article/society/ihra-definition-antisemitism/">
            individuals
          </a>{" "}
          that conflated expressions of solidarity with Palestinians or
          anti-Zionist sentiments with antisemitism.
        </p>
        <p>
          We do not necessarily endorse or condemn the comments or actions of
          the individuals in our report. NWU undertook this project in response
          to the needs expressed by media workers in the U.S. We are a
          worker-led organization, so our report centers workers and their
          grievances.
        </p>
        <p>
          At the extreme end of our retaliation findings, NWU identified 10
          cases where media companies fired staffers, terminated long-term
          contracts, or pressured an employee to resign for editorial choices,
          social media posts, or statements that expressed solidarity with
          Palestinians or criticized Israeli state action. Eight other cases
          involved editors canceling the assignments of freelance workers. (A
          ninth case involved assignments of staff workers being canceled.)
          Other workers faced canceled appearances or events and/or rescinded
          awards.
        </p>
        <p>
          Workers in our sample were most likely to suffer retaliation in the
          form of social media suppression, including via new, wide-reaching
          policies affecting dozens of workers at outlets including{" "}
          <a href="https://www.telegraph.co.uk/business/2023/12/04/guardian-staff-ordered-not-sign-petitions-israel-bias-row/">
            The Guardian
          </a>
          , with its liberal reputation, and{" "}
          <a href="https://www.washingtonpost.com/style/media/2023/11/08/hearst-social-media-policy/">
            Hearst Magazines
          </a>
          , with its roster of more than 25 brands. Signing open letters also
          spurred retaliation: 38 workers at the{" "}
          <a href="https://lapublicpress.org/2023/12/la-times-workers-demanded-better-gaza-coverage-and-condemned-israels-killing-of-journalists-their-bosses-punished-them/">
            Los Angeles Times
          </a>{" "}
          and 20 workers at the Australia-based{" "}
          <a href="https://www.crikey.com.au/2023/11/27/nine-editors-hypocrisy-israel-palestine-letter/">
            Sydney Morning Herald
          </a>{" "}
          and The Age were restricted from covering certain topics after signing
          letters condemning the deaths of Palestinian journalists.
        </p>
        <p>
          Sometimes, social media backlash escalated into harassment. Multiple
          cases included in our quantitative analysis are not described in the
          report, at the request of those impacted, due to online harassment
          that escalated to threats of violence or death.
        </p>
        <p>
          Twenty-four of the cases we gathered, impacting more than 60 people,
          involved U.S. institutions. Twenty of the cases, impacting more than
          45 people, involved institutions based in Canada, Australia, the
          United Kingdom, France, Germany, and Italy.
        </p>
        <p>
          The result of such retaliation is not merely the deplatforming of a
          couple dozen media workers. Rather, it encompasses the silencing of
          countless others, for whom instances of retaliation serve as warnings
          against speaking out, now and in the future. The majority of the 22
          respondents to NWU’s self-censorship survey said that they felt more
          pressure than before October 7 to censor their speech.
        </p>
        <p>
          Our survey questions were intentionally open-ended, inviting
          participants to share their experiences of pressure to self-censor
          speech related in any way to Israel or Palestine. Twenty respondents
          said they felt that they should avoid public speech showing solidarity
          with Palestinians, criticizing Israeli state action, and/or
          characterizing the ongoing bombardment of Gaza as “ethnic cleansing”
          or “genocide.” Conversely, one respondent described pressure to avoid
          expressing support for Israel. Survey participants named firing,
          blacklisting, and marginalization within the industry as among the
          consequences they expected to face if they voiced their views on the
          topic.
        </p>
        <p>
          The following sections discuss the results in greater detail and
          highlight some central themes, takeaways, and recommendations.
        </p>
        <Subheading>
          Termination, Resignation, and Cancellation of Assignments
        </Subheading>
        <p>
          Two editors-in-chief, a longtime contract{" "}
          <a href="https://www.bbc.com/news/entertainment-arts-67122609">
            cartoonist
          </a>
          , an{" "}
          <a href="https://theintercept.com/2023/10/26/axel-springer-fires-employee-israel/">
            apprentice
          </a>
          , a{" "}
          <a href="https://rabble.ca/politics/canadian-politics/palestinian-journalist-fired-from-ctv-for-pro-palestine-activism/">
            production assistant
          </a>
          , and a{" "}
          <a href="https://www.jewishexponent.com/phillyvoice-sixers-writer-jackson-frank-discusses-pro-palestine-tweet-that-got-him-fired/">
            sports reporter
          </a>{" "}
          were among those fired over their public statements and editorial
          choices regarding Israel and Palestine.
        </p>
        <p>
          Artforum, for instance, fired Editor-in-Chief David Velasco after he
          oversaw the publication of an{" "}
          <a href="https://www.artforum.com/columns/open-letter-art-community-cultural-organizations-518019/">
            open letter
          </a>{" "}
          that over 8,000 artists and cultural workers signed in solidarity with
          Palestinians. The board of eLife, a medical and life sciences journal,{" "}
          <a href="https://www.nbcnews.com/science/science-news/firing-science-journal-editor-gaza-post-sparks-free-speech-rift-rcna122128">
            fired
          </a>{" "}
          Editor-in-Chief Michael Eisen after he{" "}
          <a href="https://www.theonion.com/dying-gazans-criticized-for-not-using-last-words-to-con-1850925657">
            retweeted
          </a>{" "}
          a satirical article from The Onion that called out many people’s
          indifference to the lives of Palestinians. Palestinian journalist
          Zahraa Al-Akhrass was on maternity leave when Canada’s Global News
          <a href="https://www.cbc.ca/news/canada/chilling-effect-pro-palestinian-1.7064510">
            fired
          </a>{" "}
          her for social media posts that included the hashtags #freepalestine,
          #gazaunderattack and #gazagenocide. Al-Akhrass said that she regularly
          posts her opinions about a range of current events and that she had
          never been questioned by an employer until now. “Global was literally
          asking me to look at these horrific images, this genocide, and detach
          myself from my identity, my own people, and say nothing,” Al-Akhrass
          said in a video{" "}
          <a href="https://www.instagram.com/reel/Cy_YCzYLGpc/">posted</a> to
          Instagram. “Is this ethical or moral, humane or diverse or inclusive?”
        </p>
        <PullQuote left>
          <q>
            Global was literally asking me to look at these horrific images,
            this genocide, and detach myself from my identity, my own people,
            and say nothing. Is this ethical or moral, humane or diverse or
            inclusive?
          </q>
          <br />
          <span>—Zahraa Al-Akhrass</span>
        </PullQuote>
        <p>
          Some media workers were coerced or pressured by their employers to
          resign after expressing concern regarding Israeli state violence. A
          notable example is award-winning journalist Jazmine Hughes, who{" "}
          <a href="https://1ft.io/proxy?q=https%3A%2F%2Fwww.nytimes.com%2F2023%2F11%2F03%2Fbusiness%2Fmedia%2Fnew-york-times-writer-resign-israel-gaza-war.html">
            resigned
          </a>{" "}
          as a staff writer from the New York Times Magazine after signing an{" "}
          <a href="https://www.writersagainstthewarongaza.com/">open letter</a>{" "}
          put forth by the group{" "}
          <a href="https://www.writersagainstthewarongaza.com/">
            Writers Against the War on Gaza
          </a>
          , an ad hoc coalition formed after October 7. The magazine determined
          that signing the letter violated the publication’s policy on public
          protest. Jamie Lauren Keiles, a freelance journalist who maintained an
          annual contract with the publication, also announced that he would no
          longer contribute work to the magazine.
        </p>
        <p>
          Keiles told{" "}
          <a href="https://www.democracynow.org/2023/11/14/nyt_magazine">
            Democracy NOW!
          </a>{" "}
          that, in addition to raising the alarm on a humanitarian issue, his
          resignation was about pushing back on unfair conditions for contingent
          workers. “If an institution is not willing to give you a job, then
          what do you owe them?” Keiles said. “The idea that the magazine or the
          Times as a whole would have some hold on my speech just seemed
          ludicrous to me. So, in some way, it was a small amount of protest
          over the labor conditions in the industry at large.”
        </p>
        <p>
          Additional freelance workers lost work for speech related to Israel
          and Palestine, at times with less transparency from the organizations
          that commissioned and then punished them. After October 7, multiple
          freelancers had individual assignments related and unrelated to Israel
          and Palestine suddenly canceled and contracts left to expire. For
          example, the Poetry Foundation indefinitely{" "}
          <a href="https://www.poetryfoundation.org/harriet-books/2023/11/a-message-to-our-communities">
            postponed
          </a>{" "}
          a{" "}
          <a href="https://www.poetryproject.org/publications/newsletter/274-fall-2023/the-hog-is-a-lonely-hunter">
            piece
          </a>{" "}
          that discussed anti-Zionism, and the Harvard Law Review{" "}
          <a href="https://theintercept.com/2023/11/21/harvard-law-review-gaza-israel/">
            killed
          </a>{" "}
          its first ever commissioned piece by a Palestinian. At least two
          publishers stated publicly or privately that they would no longer work
          with certain freelancers because of their speech on Palestine.
        </p>
        <PullQuote right>
          <q>
            If an institution is not willing to give you a job, then what do you
            owe them? ... In some way, it was a small amount of protest over the
            labor conditions in the industry at large.
          </q>
          <br />
          <span>—Jamie Lauren Keiles</span>
        </PullQuote>
        <p>
          One U.S. freelancer, who requested anonymity, told NWU that a local
          outlet she regularly wrote for killed three of her stories after she
          posted criticism on social media regarding Israel’s military campaign
          in Gaza. Of the three stories, which were lifestyle pieces unrelated
          to the Middle East, she was compensated for the two she had already
          filed and given no kill fee for the third. The freelancer’s editor
          told her the pieces were canceled because she had violated the
          publication’s social media policy but did not specify further.
        </p>
        <p>
          Another case involved Lebanese Australian journalist Antoinette
          Lattouf, whose one-week contract as a substitute host for the ABC
          Sydney morning radio show was canceled after she posted a Human Rights
          Watch report accusing Israel of using starvation as a weapon. A Sydney
          Morning Herald report later{" "}
          <a href="https://www.smh.com.au/business/workplace/secret-whatsapp-messages-show-co-ordinated-campaign-to-oust-antoinette-lattouf-from-abc-20240115-p5exdx.html">
            revealed
          </a>{" "}
          that a group called Lawyers for Israel had been writing letters to
          network leadership complaining about Lattouf’s role and threatening
          legal action if she were not fired. Lattouf is now{" "}
          <a href="https://www.theguardian.com/media/2024/feb/26/antoinette-lattouf-abc-unlawful-termination-case-federal-court-suing">
            pursuing
          </a>{" "}
          legal action against the company.
        </p>
        <Subheading>Assignment Restrictions</Subheading>
        <p>
          Restricting the assignments of media workers perceived as biased was
          another common disciplinary measure. As defined in this report,
          assignment restrictions can entail forbidding media workers from
          covering a beat or subject, whether temporarily or permanently, or
          suspending them from their jobs.
        </p>
        <p>
          Two large news outlets restricted assignments for dozens of media
          workers who signed open letters related to Palestine. Management at
          the Los Angeles Times banned 38 employees from covering any stories
          related to Israel or Palestine for at least three months after they
          signed a letter condemning Israel’s killing of journalists in Gaza;
          the company claimed the letter violated its ethics policy. A report by
          the Los Angeles Public Press{" "}
          <a href="https://lapublicpress.org/2023/12/la-times-workers-demanded-better-gaza-coverage-and-condemned-israels-killing-of-journalists-their-bosses-punished-them/">
            noted
          </a>{" "}
          that Los Angeles Times reporters have signed open letters in the past
          without consequence, including{" "}
          <a href="https://medialetterpalestine.medium.com/an-open-letter-on-u-s-media-coverage-of-palestine-d51cad42022d">
            one in 2021
          </a>{" "}
          demanding better media coverage of Israel’s “system of apartheid” and{" "}
          <a href="https://latguild.com/news/2020/6/23/letter-from-la-times-guild-black-caucus">
            another in 2020
          </a>{" "}
          from the Los Angeles Times Guild’s Black Caucus critiquing the paper’s
          coverage of Black communities. According to the NewsGuild, which
          represents Los Angeles Times staff, 28 of the 38 people disciplined in
          this case were people of color, including seven of Middle Eastern,
          North African, or Muslim descent. By comparison, the newsroom is about
          half people of color, half white.
        </p>
        <p>
          In Australia, 20 journalists at The Sydney Morning Herald and The Age,
          both publications owned by Nine Entertainment, were banned from
          participating “in any reporting or production relating to the war”
          because they signed an{" "}
          <a href="https://www.jotform.com/form/233177455020046">open letter</a>{" "}
          critiquing Australian media's coverage of Israel’s assault on Gaza.
          According to leaked Slack messages{" "}
          <a href="https://www.crikey.com.au/2023/11/27/nine-editors-hypocrisy-israel-palestine-letter/">
            posted
          </a>{" "}
          by the publication Crikey, the publications’ executive editor
          justified the decision by citing concerns about bias: “It is a
          strong-held tenet that our journalists’ personal agendas do not
          influence our reporting on news events,” he said.
        </p>
        <Subheading>
          Cancellation of Appearances and Events; Awards Rescinded
        </Subheading>
        <p>
          At least 10 media workers have had public appearances canceled or
          postponed. Most of the event cancellations appear to be responses to
          perceived appearance of antisemitism or insensitivity to those in
          Israel affected by the October 7 attack.
        </p>
        <p>
          Just hours before a scheduled book talk in October with Pulitzer
          Prize-winning author Viet Thanh Nguyen, the 92nd Street Y, a New York
          cultural and community center, “postponed” the event. The institution
          <a href="https://www.reuters.com/world/us/pulitzer-winner-who-backs-palestinians-says-talk-canceled-by-ny-jewish-2023-10-21/">
            referenced
          </a>{" "}
          “the public comments by the invited author on Israel and this moment.”
          Nguyen had signed an{" "}
          <a href="https://www.instagram.com/viet_t_nguyen/p/CyjKxFjuyyx/?img_index=1">
            open letter
          </a>{" "}
          criticizing Israel in the London Review of Books two days prior.
        </p>
        <p>
          Other events were canceled on account of alleged security threats or
          after{" "}
          <a href="https://pen.org/press-release/even-in-times-of-war-art-must-not-be-canceled/">
            interventions
          </a>{" "}
          by{" "}
          <a href="https://twitter.com/freedom_theatre/status/1712440518880153934">
            public officials
          </a>
          . The London venue Conway Hall, for example, planned to host the
          launch of Jewish American journalist Nathan Thrall’s book—a work of
          nonfiction platforming Palestinian voices—but the venue{" "}
          <a href="https://www.washingtonpost.com/books/2023/11/02/nathan-thrall-book-events-cancelled/">
            called off
          </a>{" "}
          the event after being contacted by the Metropolitan Police.{" "}
        </p>
        <p>
          Planned televised appearances have also been canceled. In one case,
          CBS live-streamed an interview with Palestinian American legal scholar
          and author Noura Erakat about Israeli human rights violations in Gaza.
          The clip was never posted on CBS’s website, although this would be the
          company’s typical practice, because it was{" "}
          <a href="https://jewishcurrents.org/major-news-networks-sideline-palestinian-analysts">
            viewed
          </a>{" "}
          as being too combative, according to a report by Jewish Currents.{" "}
        </p>
        <p>
          German institutions have been particularly aggressive in{" "}
          <a href="https://www.spiegel.de/kultur/literatur/sharon-dodua-otoo-stadt-bochum-hat-preisverleihung-wegen-moeglicher-bds-naehe-ausgesetzt-a-0af3d803-b889-49af-9c10-94b885615e64">
            canceling
          </a>{" "}
          events and awards. In October, the Palestinian writer Adania Shibli
          won the German Literaturpreis for her novel Minor Detail, which
          follows a Palestinian narrator researching a historical incident of
          violence against a Palestinian woman. The literary association Litprom{" "}
          <a href="https://www.nytimes.com/2023/10/13/books/frankfurt-book-fair-cancels-award-adania-shibli.html">
            canceled
          </a>{" "}
          the award ceremony “due to the war in Israel.” In another similar
          incident, the Heinrich Böll Foundation and the city of Bremen canceled
          an awards ceremony at which author Masha Gessen, who is Jewish, was to
          receive the Hannah Arendt Prize, after Gessen{" "}
          <a href="https://www.newyorker.com/news/the-weekend-essay/in-the-shadow-of-the-holocaust">
            published
          </a>{" "}
          an essay in the New Yorker comparing Gaza to a Nazi ghetto.
        </p>
        <PullQuote left>
          <q>
            I would not want to be part of another institution which not only
            cancels artists because of their activism, but seems to think
            silence and censorship is the right answer to genocide.
          </q>
          <br />
          <span>—Lana Bastašić</span>
        </PullQuote>
        <p>
          NWU documented two cases in which awards were rescinded for
          pro-Palestinian speech. After the Bosnian-Serbian novelist Lana
          Bastašić{" "}
          <a href="https://www.theguardian.com/world/2024/jan/15/novelist-lana-bastasic-breaks-with-german-publisher-cultural-boycott-israel-gaza#:~:text=Lana%20Basta%C5%A1i%C4%87%2C%2037%2C%20who%20won,genocide%20happening%20in%20Gaza%E2%80%9D%2C%20as">
            cut ties
          </a>{" "}
          with her German publisher over its silence regarding “the ongoing
          genocide,” the Austrian literary organizations Literaturhaus NÖ and
          Literaturfest Salzburg{" "}
          <a href="https://lithub.com/read-novelist-lana-bastasics-blazing-response-to-yet-another-act-of-literary-censorship/">
            revoked
          </a>{" "}
          her planned residency and reading. “Thank you for uninviting me. I
          would not want to be part of another institution which not only
          cancels artists because of their activism, but seems to think silence
          and censorship is the right answer to genocide,” Bastašić replied.
        </p>
        <p>
          In a telling twist, French Moroccan journalist Zineb El Rhazoui{" "}
          <a href="https://www.tingismagazine.com/editorials/zinebs-war-on-islamic-fascism/">
            received
          </a>{" "}
          the 2019 Simone Weil prize for her controversial criticism of Islam
          and defense of French secularism, but the award was{" "}
          <a href="https://www.barrons.com/news/french-journalist-stripped-of-award-over-israel-comments-deb6c69e">
            rescinded
          </a>{" "}
          in December for her public criticism of Israeli attacks on Gaza.
        </p>
        <Subheading>
          Social Media Suppression, Online Harassment, and Doxxing
        </Subheading>
        <p>
          Social media suppression was the most common type of retaliation in
          our sample. Suppression ranged from newly restrictive company policies
          about online posting and managers suspending workers for posts, to the
          blocking of posts by social media platforms themselves. NWU documented
          16 such cases that impacted dozens of workers. Some escalated to
          online harassment and doxxing (publishing personal information online
          with malicious intent). Pro-Israel social media accounts and actors
          drove several cases of harassment and doxxing, and often accused the
          affected media workers of antisemitism or supporting terrorism.
        </p>
        <p>
          In one instance, Heba Macksoud, an Egyptian American Muslim woman
          working as a digital media consultant for nonprofits, received a
          torrent of online harassment and intimidation affecting her family’s
          wellbeing after she posted “I stand with Palestine” on a New Jersey
          neighborhood Facebook page. Locals posted information about where
          members of Macksoud’s family worked, spammed the website of her
          husband’s pharmacy with one-star reviews, and called her daughter’s
          former employer to claim that her daughter was a Hamas supporter.
          Macksoud is now hesitant to associate with organizations that support
          Palestinians, has changed her last name and profile picture online,
          and feels “terrified” to express herself on social media
          again—especially after seeing a suspicious car parked outside her
          house on a dead-end street for hours. Against the backdrop of
          apparently{" "}
          <a href="https://www.npr.org/2023/11/28/1215512722/theres-been-an-uptick-of-suspected-hate-crimes-in-the-u-s-since-israel-ham">
            escalating
          </a>{" "}
          hate crimes and harassment against Arabs and Muslims, media workers of
          these backgrounds have reason to fear for their safety and that of
          their loved ones.
        </p>
        <p>
          The Committee for Accuracy in Middle East Reporting and Analysis
          (CAMERA), a group dedicated to combating what it claims to be
          anti-Israel bias in the news, targeted the social media activity of
          six Middle Eastern staff journalists and one freelancer for the BBC.
          In response, the BBC{" "}
          <a href="https://www.ft.com/content/c998bfa4-ad8e-4c61-9117-61a57aa9a92a">
            launched
          </a>{" "}
          an “urgent investigation” into the posts and took the reporters off
          the air, stating publicly that the freelancer named in CAMERA’s report
          would not be hired for future projects. (Later, the BBC{" "}
          <a href="https://dohanews.co/bbc-takes-no-disciplinary-action-against-journalists-after-probe-into-pro-palestine-posts/">
            concluded
          </a>{" "}
          that no disciplinary action would be taken.)
        </p>
        <PullQuote right>
          <q>
            In calling me out they opened me up to a lot of racist abuse as
            well. It put a target on my back… I’m a black girl, I’m a
            freelancer, so it’s really easy for you to try to ruin my
            livelihood.
          </q>
          <br />
          <span>—Chanté Joseph</span>
        </PullQuote>
        <p>
          In another case, an article by the outlet Jewish News{" "}
          <a href="https://www.jewishnews.co.uk/guardian-journalist-retweets-pro-hamas-social-media-account/">
            condemned
          </a>{" "}
          social media posts by freelancer and Guardian contributor Chanté
          Joseph that criticized Israel. In the posts, Joseph pointed out that
          violence has historically been used in liberation struggles, and{" "}
          <a href="https://www.theguardian.com/world/2023/nov/10/israel-red-white-kidnapped-posters-flyers-palestine-conflict">
            called
          </a>{" "}
          “missing” posters of Israeli hostages “propaganda.” In a comment to
          Jewish News, Joseph apologized and said she’d deleted the posts. The
          Guardian called the freelancer’s posts unacceptable and{" "}
          <a href="https://novaramedia.com/2024/03/12/how-the-guardians-editor-in-chief-caved-to-pro-israel-pressure/">
            announced
          </a>{" "}
          that Joseph’s weekly podcast was “taking a break.”
        </p>
        <p>
          Joseph told NWU that in the wake of the Jewish News article she faced
          extensive online harassment and was dropped by the UK magazine Stylist
          as a speaker on a panel. “In calling me out they opened me up to a lot
          of racist abuse as well. It put a target on my back,” she said. “We’re
          low-hanging fruit—I’m a black girl, I’m a freelancer, so it’s really
          easy for you to try to ruin my livelihood.”
        </p>
        <p>
          In an effort to avoid allegations of bias, multiple organizations have
          released new social media policies that typically leave management
          with significant discretion to decide whom to discipline. For example,
          The Guardian’s editor-in-chief, along with its senior U.S. and
          Australian editors,{" "}
          <a href="https://www.afr.com/companies/media-and-marketing/guardian-bans-open-letters-and-social-posts-amid-row-over-israel-20231204-p5eoz1">
            announced
          </a>{" "}
          a new policy discouraging journalists from signing open letters or
          posting statements on social media that “risk compromising our
          editorial integrity.” According to the editors’ memo, “Senior editors
          will decide on any appropriate action on a case by case basis.” Some
          outlets are known to reprimand staffers and contributors for publicly
          criticizing the organization they work for—or its coverage.
        </p>
        <p>
          In at least one case, managers reprimanded a media worker for
          critiquing media coverage of Palestine on a private Instagram account
          (meaning it could only be viewed by approved followers). The staffer
          was temporarily barred from working on stories related to Israel or
          Palestine. They said that they are the only Muslim in their newsroom,
          and that white coworkers were not initially reprimanded for signing
          public letters supportive of Palestinians.
        </p>
        <Subheading>
          Beyond Media: Repression in Academia, Art, and Related Workplaces
        </Subheading>
        <p>
          Many media workers pay their bills by working for academic
          institutions or arts organizations that have disciplined or cut ties
          with those who criticize Israel and/or stand up for Palestinians. Over
          the course of our data collection, we encountered several cases of
          workers facing retaliation within the arts and academia. We did not
          include those cases in our quantitative analysis because they took
          place beyond the boundaries of the media industry. Nevertheless, they
          follow similar patterns and merit further discussion.
        </p>
        <p>
          Across the United States, students and academic workers have faced
          {""}
          <a href="https://www.stltoday.com/news/local/metro/wash-u-professor-said-he-was-fired-for-anti-palestinian-post-as-hundreds-protest-war/article_7a19fbc0-6b86-11ee-8d13-df96f0032447.html">
            firing
          </a>
          ,{""}
          <a href="https://www.reuters.com/world/us/us-professors-suspended-probed-over-gaza-war-comments-2023-11-17/">
            suspension
          </a>
          ,{""}
          <a href="https://vtdigger.org/2023/10/23/citing-safety-concerns-university-of-vermont-cancels-event-with-palestinian-writer/">
            event cancellation
          </a>
          ,{""}
          <a href="https://www.thenation.com/article/world/canary-mission-israel-covert-operations/"></a>
          doxxing,{""}
          <a href="https://www.huffpost.com/entry/palestinians-israel-social-media-job-firing_l_654bca09e4b0e3ecaf8bf964"></a>
          social media suppression,{""}
          <a href="https://www.npr.org/2023/12/15/1219434298/israel-hamas-gaza-palestinians-college-campus-free-speech"></a>
          censorship, and{""}
          <a href="https://www.aljazeera.com/news/2024/1/23/columbia-uni-bars-people-accused-of-spraying-pro-palestine-protesters"></a>
          violence from police and counterprotesters. The most high-profile case
          of academic retaliation may be that of former Harvard University
          president Claudine Gay, who was{""}
          <a href="https://www.thecrimson.com/article/2024/1/3/claudine-gay-resign-harvard/">
            forced to resign
          </a>
          {""}due to pressure from powerful donors. There is no question of
          intent: Conservative activist Christopher F. Rufo, a vocal opponent of
          “critical race theory,”{" "}
          <a href="https://manhattan.institute/person/christopher-f-rufo">
            instigated
          </a>{" "}
          investigations by The Washington Free Beacon and others into
          plagiarism in Gay’s academic publications, per his own{" "}
          <a href="https://www.wsj.com/articles/how-we-squeezed-harvard-claudine-gay-firing-dei-antisemitism-culture-war-a6843c4c">
            account
          </a>{" "}
          in the Wall Street Journal. The campaign{" "}
          <a href="https://www.nytimes.com/2023/10/10/us/harvard-israel-gaza-hamas-reaction.html">
            began
          </a>{" "}
          when Gay did not immediately refute a letter written by Palestine
          solidarity groups at Harvard that blamed Israel for the October 7
          Hamas attack. The specious plagiarism findings (i.e. nearly 50
          instances of “inadequate citation”) became pretext for her removal.
        </p>
        <p>
          NWU interviewed multiple workers in academia who described facing
          retaliation based on their social media posts. Since October,{" "}
          <a href="https://twitter.com/JJayEcon/status/1775622502972084645">
            at
          </a>{" "}
          <a href="https://x.com/brandonshimoda/status/1778238396218917371">
            least
          </a>{" "}
          <a href="https://www.columbiaspectator.com/news/2024/04/10/mailman-professor-abdul-kayum-ahmed-receives-letter-of-nonrenewal/">
            three
          </a>{" "}
          adjunct academics in New York were told that their appointments would
          not be renewed after speaking out in solidarity with Palestinians. A
          U.S. poet and academic reported that a tweet they posted empathizing
          with Palestinians led to harassing messages and physical threats.
          After the school they worked for issued a public statement saying the
          tweet was not in line with the university’s values, the worker
          resigned from their teaching position and relocated to another part of
          the country.{" "}
        </p>
        <p>
          Meanwhile, Arnesa Buljušmić-Kustura, an author, genocide researcher,
          and{" "}
          <a href="https://www.theguardian.com/world/2024/jan/18/its-not-just-israel-on-trial-bosnian-war-survivors-support-for-genocide-case">
            survivor
          </a>{" "}
          of the Bosnian genocide,{" "}
          <a href="https://twitter.com/Rrrrnessa/status/1716819630583673259">
            wrote
          </a>{" "}
          on X (formerly known as Twitter) that she was rejected from her dream
          job following pro-Palestinian posts on social media, even though she
          had already gone though six rounds of interviews.
        </p>
        <p>
          In the art world, museums and galleries have{" "}
          <a href="https://theintercept.com/2023/10/26/artforum-artists-gaza-ceasefire-martin-eisenberg/">
            retaliated
          </a>{" "}
          against workers and{" "}
          <a href="https://www.npr.org/2024/02/17/1232243208/indiana-university-abruptly-canceled-a-palestinian-artists-exhibit-its-now-sold-">
            canceled
          </a>{" "}
          exhibitions. For example, Anishinaabe curator and author Wanda
          Nanibush left her position at the Art Gallery of Ontario (AGO) after
          the museum received a letter from the directors of Israel Museums and
          Arts, Canada (IMAAC),{" "}
          <a href="https://www.theglobeandmail.com/arts/article-indigenous-curator-ago-wanda-nanibush/">
            accusing
          </a>{" "}
          Nanibush of “posting inflammatory, inaccurate rants against Israel.”
          In a comment to Hyperallergic, a spokesperson for AGO{" "}
          <a href="https://hyperallergic.com/857994/questions-arise-as-indigenous-curator-wanda-nanibush-suddenly-departs-toronto-art-gallery-of-ontario/">
            called
          </a>{" "}
          Nanibush’s departure a “mutual decision.”
        </p>
        <p>
          German institutions have been particularly aggressive in{" "}
          <a href="https://www.artnews.com/art-news/news/germany-art-scene-israel-war-gaza-1234700551/">
            canceling
          </a>
          events and exhibitions featuring cultural workers who criticize Israel
          and/or stand up for Palestinians. For example, the Museum Folkwang in
          Essen canceled an exhibition by Anaïs Duplan, after the trans Haitian
          American writer and artist expressed support for Boycott, Divestment,
          Sanctions (BDS) on social media. The museum{" "}
          <a href="https://www.museum-folkwang.de/en/exhibition/we-future">
            stated
          </a>{" "}
          that it was “solely because the curator personally takes sides with
          the BDS campaign, which questions Israel’s right to exist.” In
          response to Germany’s severe climate of censorship, an Instagram
          account called{" "}
          <a href="https://www.instagram.com/archive_of_silence/?hl=en">
            Archive of Silence
          </a>{" "}
          has been{" "}
          <a href="https://docs.google.com/spreadsheets/d/1Vq2tm-nopUy-xYZjkG-T9FyMC7ZqkAQG9S3mPWAYwHw/edit#gid=1227867224">
            crowdsourcing and compiling
          </a>{" "}
          cases of repression of pro-Palestinian speech in the country, and more
          than 4,000 people have signed onto “
          <a href="https://strikegermany.org/">Strike Germany,</a>” a boycott of
          German cultural institutions.{" "}
        </p>
      </SectionDark>
    </main>
  )
}
