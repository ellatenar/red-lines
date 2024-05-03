/* eslint-disable react/no-unescaped-entities */
import { unica } from "../fonts"
import styles from "./Data.module.css"
import Image from "next/image"
import graphic1 from "@/public/images/retaliation_graphic_who.png"
import graphic2 from "@/public/images/retaliation_graphic_how_many.png"
import graphic3 from "@/public/images/retaliation_graphic_what_forms.png"
import SectionDark from "../components/SectionDark"
import SectionLight from "../components/SectionLight"
import PullQuote from "../components/PullQuote"

export default function Data() {
  return (
    <main>
      <SectionDark>
        <h1 className={unica.className}>The Data</h1>
        <div className={styles.graphicsContainer}>
          <div className={styles.graphic}>
            <Image src={graphic1} alt="" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.graphic}>
            <Image src={graphic2} alt="" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.graphic}>
            <Image src={graphic3} alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
        <h3 className={unica.className}>Summary of Results</h3>
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
        <h3 className={unica.className}>
          Termination, Resignation, and Cancellation of Assignments
        </h3>
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
          —Zahraa Al-Akhrass
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
            labor conditions in the industry at large.”
          </q>
          - Jamie Lauren Keiles
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
        <h3 className={unica.className}>Assignment Restrictions</h3>
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

        <h3 className={unica.className}>
          Cancellation of Appearances and Events; Awards Rescinded
        </h3>
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
          </q>{" "}
          —Lana Bastašić
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
      </SectionDark>
    </main>
  )
}
