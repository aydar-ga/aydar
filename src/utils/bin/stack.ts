import config from '../../../config.json';

const stack = async (args: string[]): Promise<string> => {
  return `                                                  
 Here is an overview of technologies & methodologies I worked with.
-----------

 TEST AUTOMATION
  > Cypress (Component & E2E) | Playwright
  > Percy & Appitools (UI/Screenshots)
-----------
 CI / CD
  > Bitbucket
  > GitHub Actions
------------
 LOAD TESTING
  > Octoperf
------------
 TEST TOOLS
  > Postman
  > Proxy Tools
  > BrowserStack & Lambdatest
------------
 TEST & PROJECT MANAGEMENT
  > Jira & XRay
  > TestRail
------------
 TECHNOLOGIES
  > JS & React & Next.js & Vercel
  > Supabase & SQL
  > Python
------------
 RESPONSIBILITIES & PROCESSES
  > QA strategy & QA Team operations
  > Automation Test-Driven Development
  > Release Management
  > Requirements Engineering
  > Scrum-mastering
`;
};

export default stack;
