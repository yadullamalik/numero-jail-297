import React from 'react'
import styles from "../styles/CurrentJobs.modules.css";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const Faq = () => {
  return (
    <div>
<h1 className='fq'>FAQs</h1>
<div className='line'></div>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        What is the Toggl hiring process like?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    We do things a little differently around here. Instead of applying with resumes and cover letters (a terrible way to gauge true aptitude), we just ask you to take a 15-20 minute online skills test. We use Toggl Hire to generate a unique skills test for every candidate, testing highly relevant skills for the position you're applying for. This enables us to shortlist the best talent straight away, which means very quick feedback for you!
Here is how our skills-based hiring works:
<br/>
<br/>
1. Skills Test: A short online quiz to evaluate your skills and knowledge fit for the position. We manually review all the tests that pass the set minimum threshold.
<br/>
<br/>
2. Assignment: Next, we invite top candidates to complete a take-home assignment or a live coding task along with an interview so that we can better understand your experiences and expectations.
<br/>
<br/>
3. Test Week: Candidates who excel with the assignment and interview are invited to join our team for 3-5 days of paid work so that we can all experience what it would be like to work together.
<br/>
<br/>
4. Leadership Interview: An opportunity to touch base with a member of our leadership team to ask each other final questions.
<br/>
<br/>
The process may differ slightly depending on the role, but we will always place the greatest value on job-specific skills and remote work skills when making hiring decisions.
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7' >
        How is the test score calculated?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    Our skills tests consist of multiple choice, single data entry, and some open text questions. Both the multiple choice and single data entry questions are scored automatically when you complete the test. For candidates who meet our minimum score threshold after this first round, a real person then reviews the answers submitted for the open text questions.
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        How long will it take to get feedback about my application?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    Your test score based on your responses to multiple choice and single data entry questions will be displayed immediately after finishing the test, so that you know where you stand. If you score above the set threshold for the position, we aim to have a real person review your open text answers (not included in the test score) within 2-3 weeks, but this may differ depending on the number of applications. We will reach out directly to people who advance to the next round.
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        How many times can I take a skills test for a given role?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    Each candidate can only take any given test once. It is not possible to retake a test. However, you are welcome to take other tests for new positions as they become available.
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        Where can I submit my resume?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    You don't! Instead of resumes, we want to see your real skills. That's why we only consider candidates who take the skills tests posted on our jobs page, and only applicants who do well on the test will move forward. Candidates who advance to the next rounds will get to demonstrate their knowledge through more elaborate assignments and trial work.
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        Isn’t it unfair to use tests to evaluate candidates?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    We believe using equal, quantifiable terms to assess candidates’ skills is more fair than having humans reading resumes with their conscious or unconscious biases. We get hundreds (sometimes thousands) of applications for each position and the skills tests help us to evaluate whether a candidate has the basic job skills that we require.
<br/>
<br/>
We also realize that the tests don't fully describe a candidate's expertise and personality. That is why candidates who advance to the next rounds will get to demonstrate their knowledge and character through more elaborate assignments, trial work, and interviews.
    </AccordionPanel>
  </AccordionItem>

  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        What if I don’t see a suitable open role, but would still like to work for Toggl?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    All our vacancies are always posted on our jobs page and there are no additional openings. Please keep an eye on this page for any positions that could match your skills and interests.
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        Do you have internship positions?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    Unfortunately, we don't have any internship positions to offer. We only hire full-time team members.
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton background='#412a4c ' border='#412a4c '>
        <Box flex='1'lineHeight='40px' fontSize='23px' textAlign='left' background='#412a4c ' color='#ece1d7'>
        What is it like to work at Toggl?
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='40px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4} display='flex' background='#ffde91 ' color='black' textAlign='left' fontSize='17px'>
    Toggl is proudly a fully remote company. We have the freedom to choose when and where we work, but with this freedom comes a lot of personal responsibility. We are a team of independent people and we each put a lot of effort into communicating and collaborating across teams, to make sure we get things done quickly and efficiently.
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
</Accordion>
      
    </div>
  )
}

export default Faq;