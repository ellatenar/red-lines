import Button from "../components/Button"
import { Heading, Subheading } from "../components/Headings"
import SectionDark from "../components/SectionDark"
import { Metadata } from "next"
import { links } from "../layout"

export const metadata: Metadata = {
  title: "Methodology",
}

export default function Methodology() {
  return (
    <main>
      <SectionDark>
        <Heading>Methodology</Heading>
        <p>
          This report draws on public records of retaliation described in news
          articles and posted on social media, as well as interviews with
          directly impacted media workers and responses to two surveys
          distributed by the National Writers Union.
        </p>
        <p>
          Six of the cases included in our quantitative data analysis came via a
          survey that NWU began circulating publicly in October 2023, soliciting
          reports of retaliation against media workers for their speech in
          support of Palestinians or their views on the war on Gaza. For each
          case drawn from the survey, an NWU member interviewed the affected
          worker and confirmed that they wanted to be a part of the report.
        </p>
        <p>
          NWU members also monitored social media and Google alerts for
          instances of retaliation against media workers reported online. Cases
          found this way make up more than half of those included in our
          analysis.
        </p>
        <p>
          NWU circulated a second survey in December 2023 that invited media
          workers to share their experiences of pressure to self-censor, actions
          taken by management to dissuade and preempt speech about
          Israel/Palestine, and what consequences they thought they might face
          for such speech. NWU member-organizers drew two additional cases of
          retaliation from those survey results, interviewing each worker.
        </p>
        <Subheading>Data Analysis</Subheading>
        <p>
          To determine whether a case should be included in our data analysis,
          we first considered whether the case could be categorized as
          retaliation. We defined retaliation as any action taken by a venue,
          outlet, organization, or group that negatively affects a media worker,
          that was triggered by a perception that the worker’s actions supported
          the Palestinian cause or criticized the government of Israel.
        </p>
        <p>
          We also considered whether the affected person should be considered a
          media worker, which we defined as anyone who could be a member of the
          National Writers Union. NWU has a broad membership that includes
          people who work primarily in academia or the art world. Although this
          report does include a section discussing media workers in academia and
          art, we did not include cases of retaliation by academic institutions,
          like universities, or fine arts institutions, like museums, because of
          the specific nature of those contexts. In many of the cases left out,
          the impacted workers held positions that fell outside the types of
          labor covered by NWU, such as teachers, curators, or administrators.
          Instead, we focused primarily on the actions of media companies and
          cultural institutions that support or feature media workers. We did
          include cases where academic publishers were the drivers of
          retaliation.
        </p>
        <p>
          Most of the cases we reviewed fit into one of the following categories
          of retaliation: cancellation of appearance/event, cancellation of
          assignment, assignment restriction, termination, resignation, social
          media suppression, online harassment, or rescinding of award. One case
          fell under “other,” and involved a worker who pushed back on an
          attempt to restrict their assignments. Our definitions can be found in
          the Data section of this report.
        </p>
        <p>
          Most of the individuals did work that fits into one of the following
          media categories: literature, print journalism, video journalism,
          visual journalism, audio, communications, social media, academia, or
          law. Over half of the cases involved journalists. In cases where the
          information was publicly available or where we interviewed a source
          directly, we also tracked impacted workers’ self-identified race,
          ethnicity, and nationality.{" "}
        </p>
        <p>
          NWU was unable to verify every collected case of retaliation, and we
          left a number of suspected retaliation cases out of our tally due to
          ambiguity. In an environment of intense precarity, where employers can
          take away work with no explanation, it wasn’t always possible to
          confirm that work was lost directly due to Israel/Palestine-related
          speech. We additionally left out a few survey respondents whom we were
          unable to reach to confirm details directly.
        </p>
        <p>
          In the discussion section, we have highlighted public anecdotes that
          were not included in our tally, in order to further explore the themes
          revealed by our quantitative data. We also included an analysis of
          responses to the self-censorship survey.
        </p>
        <p>
          In some cases, employers have said publicly or privately that an act
          of retaliation was not solely a result of speech related to Palestine,
          for example, arguing that a worker’s previous behavior shaped a
          decision. Our analysis is not limited to cases where Palestine-related
          speech was the sole possible reason for a company’s action.
        </p>
        <p>
          Finally, it’s worth noting that there are undoubtedly many cases of
          retaliation and self-censorship missing from our data given the
          climate of fear that currently permeates the media industry,
          particularly surrounding any discussion of Israel and Palestine.
        </p>
        <Subheading>Fact-checking</Subheading>
        <p>
          All entries, including those drawn from NWU surveys, were reviewed by
          a team of professional fact-checkers. In cases drawn from interviews
          with an affected worker, a fact-checker reviewed the source’s
          documentation of retaliation or spoke to witnesses to the retaliation
          whenever possible. In two cases, the worker was verbally reprimanded
          or otherwise could not provide documented evidence of retaliation. We
          chose to keep those cases in the report. Since we are a worker-led
          organization, our report centers workers’ experiences.
        </p>
        <p>
          In several cases drawn from social media, a fact-checker contacted the
          subject to learn more about the incident. When the person could not be
          reached, we did not include the case in our data analysis. We did
          include cases where a social media post included clear evidence of
          retaliation, for example, if it included{" "}
          <a href="https://twitter.com/jzsalvipoet/status/1717271868338741390">
            screenshots
          </a>{" "}
          or if the retaliation consisted of verifiable online harassment.
        </p>
        <p>
          A similar process applied for news reports. We considered reported
          news stories to be sufficient evidence of retaliation. However, where
          news stories speculated about potential retaliation based on timing,
          we attempted to contact the impacted person. If they could not be
          reached or declined to comment, we did not include the case in our
          data analysis.
        </p>
        <p>
          In some cases, we anonymized individuals upon request so that they do
          not face further retaliation or harassment.
        </p>
        <p>
          We did not exhaustively audit the cases in our tally, nor do we have
          the capacity to do so. We are neither social scientists nor
          statisticians, and we do not purport that the findings of this report
          are comprehensive or representative. Nevertheless, they do raise
          important questions about the state of journalism in the West, both at
          the industry and the workplace level. We hope that this report prompts
          collective introspection, further organizing, and course correction
          wherever needed.
        </p>
        <Subheading>Acknowledgements</Subheading>
        <p>
          This project was led by members of the National Writers Union,
          organizing with the Freelance Solidarity Project. More than two dozen
          worker-organizers researched, wrote, fact-checked, edited, and
          designed this report on a volunteer basis. Special thanks to the media
          workers and collaborating organizations that shared their insights and
          feedback on our findings and recommendations.
        </p>
        <Button navItem={links[6]} />
      </SectionDark>
    </main>
  )
}
