import { Text } from "@once-ui-system/core";

const person = {
    firstName: 'Tan',
    lastName: 'Nguyen',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'QA/QC Leader',
    avatar: '/images/avatar.jpg',
    location: 'Ho Chi Minh City, Vietnam',
    languages: ['English', 'Vietnamese']
};

const about = {
    title: 'About',
    description: 'Learn more about who I am, what I do, and what inspires me.',
    path: '/about',
    
    tableOfContent: {
        display: true,
    },
    
    avatar: {
        display: true,
    },
    
    calendar: {
        display: true,
        link: 'mailto:nguyenngoctan1990@gmail.com'
    },
    
    intro: {
        display: true,
        title: 'Introduction',
        description: (
            <>
                <Text>
                    QA/QC Leader with <strong>10+ years experience</strong> in Information Technology, 
                    specializing in IT support, manual testing, and automation testing. Currently 
                    leading quality assurance for large-scale data pipeline projects at FPT Software.
                </Text>
                <Text>
                    Over <strong>4 years of team leadership experience</strong>, managing cross-functional 
                    teams up to 26 members across multiple high-impact projects. Expert in data pipeline 
                    testing, covering ETL/ELT processes, data validation, and quality assurance across 
                    large-scale database environments processing <strong>30+ schemas and 500+ tables</strong>.
                </Text>
                <Text>
                    Successfully deployed solutions for <strong>10+ customers</strong> with proven track 
                    record in various domains including Data pipeline, Migration data, SAP, ERP, 
                    E-commerce, Fulfilment service, and Healthcare. Applied AI approaches to optimize 
                    test case design and ensure consistency in quality assurance processes.
                </Text>
            </>
        )
    },
    
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'FPT Software',
                timeframe: 'March 2024 - Present',
                role: 'QC Leader',
                achievements: [
                    <>Led quality assurance for <strong>large-scale data pipeline and migration project</strong> processing over 30 schemas and 500 tables for top Japanese airline</>,
                    <>Managed cross-functional team of <strong>26 members</strong> (2 PM, 2 Comtor, 11 DEV, 10 QC, 1 QA) ensuring high-quality complex data integration and transformation</>,
                    <>Successfully deployed solutions for <strong>10+ customers</strong> with 5 successful go-lives in 2023, improving overall product quality through cross-functional collaboration</>,
                    <>Enhanced team management through strategic application of <strong>Microsoft tools ecosystem</strong> including Teams, SharePoint, Approvals, Power Automate, Power BI</>,
                    <>Implemented comprehensive testing automation using <strong>Ranorex for UI testing</strong> and Postman for API testing with E2E automation flows</>,
                    <>Trained team members in testing mindset and skills including test case development, execution, and defect reporting methodologies</>
                ],
                images: []
            },
            {
                company: 'Laidon Company',
                timeframe: 'March 2023 - March 2024',
                role: 'QA/QC Leader',
                achievements: [
                    <>Led QA team for <strong>SimpleMDG (Master Data Governance)</strong> solution, simplifying SAP master data management through seamless integration</>,
                    <>Managed quality control procedures across <strong>10+ customers</strong> with team of 70 members (4 PM, 17 BA, 23 DEV, 11 ABAP, 15 QC)</>,
                    <>Hands-on experience with <strong>AWS services and Apache Airflow</strong> for testing orchestrating ETL/ELT workflows, optimizing reliability and efficiency</>,
                    <>Verified ETL/ELT processes and validated data integrity on <strong>Snowflake and Amazon Redshift</strong> databases, ensuring accuracy across all migration stages</>,
                    <>Applied <strong>AI approaches</strong> to summary requirements, research technical solutions, enhance test case design and review syntax, improving coverage and efficiency</>,
                    <>Designed comprehensive test strategies for data projects including estimation of testing effort and timelines across multiple small projects</>
                ],
                images: []
            },
            {
                company: 'Baspro Company',
                timeframe: 'October 2020 - March 2023',
                role: 'QA/QC Leader',
                achievements: [
                    <>Built integrated <strong>e-commerce platform ecosystem</strong> with omni-channel management, automated order fulfillment, and logistics services</>,
                    <>Managed quality control for multiple projects: <strong>SC, FOS, DH, LMD, DMS, WMS, CRM, POS, DVGo</strong> with team of 15 members</>,
                    <>Successfully launched product handling <strong>6000+ orders/day</strong> within 8 months, establishing integrated platform for e-commerce sellers</>,
                    <>Implemented <strong>API automation testing</strong> using Postman tool and performed load testing with K6 for performance optimization</>,
                    <>Mentored team of 2 QC members through instruction, coaching and providing real-time on-the-job experiences</>,
                    <>Collaborated with partners to conduct End-to-End testing before system integration, ensuring seamless platform connectivity</>
                ],
                images: []
            },
            {
                company: 'TMA Solutions',
                timeframe: 'May 2016 - October 2020',
                role: 'QA/QC Engineer',
                achievements: [
                    <>Delivered quality assurance for <strong>Vibrent Health</strong> - US government healthcare booking system allowing participants to book online health check-ups</>,
                    <>Earned multiple <strong>Star Performer Team Awards</strong> (Q2-2019, Q3-2018, Q2-2018) and Good Performer recognition (Q4-2018)</>,
                    <>Gained expertise in <strong>automation testing</strong> with Java, Selenium, TestNG, Maven, Cucumber, Jenkins for 6 months as Automation Tester role</>,
                    <>Managed automation team of <strong>3 members</strong> with comprehensive planning, task assignment, code review, and stakeholder reporting</>,
                    <>Worked on diverse projects including <strong>Iron Mountain, Moso, Shearwater, Rank Media</strong> across various platforms and testing methodologies</>,
                    <>Executed comprehensive testing including Functional, Non-Functional, Regression, API testing using Postman and JMeter tools</>
                ],
                images: []
            },
            {
                company: 'VNG Corp',
                timeframe: 'February 2012 - April 2016',
                role: 'IT Support',
                achievements: [
                    <>Provided comprehensive <strong>end-user support</strong> including networking, troubleshooting, installation, operation, and maintenance services</>,
                    <>Trained new IT employees and documented user guides for efficient knowledge transfer and operational consistency</>,
                    <>Deployed and operated <strong>G Suite and SCCM</strong> systems, ensuring smooth IT infrastructure management</>,
                    <>Reported directly to IT manager with regular status updates and maintained high service quality standards
