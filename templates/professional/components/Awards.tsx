import { HTMLRenderer } from "../../../helpers/common/components/HTMLRenderer";
import { IAwards } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionList } from "../atoms/SectionList";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { dateParser } from "../../../helpers/utils";
import { AwardDetailStore } from "../../../store/awards_store";

const AwardsSection = () => {
  const { awardsRecieved } = AwardDetailStore((state) => ({
    awardsRecieved: state.awards,
  }));
  return (
    <div className="mb-2">
      <SectionHeading title="Awards" />
      {awardsRecieved.map((award: IAwards, index: number) => {
        return (
          <div key={index} className="pb-2" style={{ paddingTop: "8px" }}>
            <SectionTitle label={award.title} />
            <div className="flex justify-between awards-center">
              <SectionSubtitle label={award.organisation} />
              <div>
                <p className="text-xs" style={{ fontStyle: "italic" }}>
                  {dateParser(award.date)}
                </p>
              </div>
            </div>
            <SectionList>
              <HTMLRenderer htmlString={award.summary} />
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};

export default AwardsSection;
