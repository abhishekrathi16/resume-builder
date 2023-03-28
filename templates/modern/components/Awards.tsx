import { HTMLRenderer } from "../../../helpers/common/components/HTMLRenderer";
import { IAwards } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionList } from "../atoms/SectionList";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { dateParser } from "../../../helpers/utils";

export const AwardsSection = ({
  awardsRecieved,
}: {
  awardsRecieved: IAwards[];
}) => {
  return (
    <div className="mb-2">
      <SectionHeading title="Awards" />
      {awardsRecieved.map((award: IAwards, index: number) => {
        return (
          <div key={index} className="pb-2">
            <SectionTitle label={award.title} />
            <div className="flex justify-between awards-center">
              <SectionSubtitle label={award.awarder} />
              <div>
                <p className="text-xs">{dateParser(award.date)}</p>
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
