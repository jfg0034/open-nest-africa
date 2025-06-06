import React from "react";
import ContributionGuide from "../../components/ContributionGuide";
import { contributionData } from "../../Data";

const Developers = () => {
	const developerData = contributionData.find(
		(contribution) => contribution.role === "Developers"
	);

	return (
		<ContributionGuide
			data={developerData.contributions}
			role={developerData.role}
			icon={developerData.icon}
			info={developerData.intro}
			videoContent={!!developerData.videoTutorial}
			videoText={developerData.videoTutorial?.description}
			videoLink={developerData.videoTutorial?.link}
			summaryTitle={developerData.remarks.title}
			summaryContent1={developerData.remarks.content1}
			summaryContent2={developerData.remarks.content2}
		/>
	);
};

export default Developers;
