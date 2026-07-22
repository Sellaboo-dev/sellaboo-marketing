import { FollowUpJourneyVisual } from "./FollowUpJourneyData";

import { ConversationVisual } from "./visuals/ConversationVisual";
import { EnrollVisual } from "./visuals/EnrollVisual";
import { FocusedVisual } from "./visuals/FocusedVisual";
import { LeadVisual } from "./visuals/LeadVisual";
import { StartedVisual } from "./visuals/StartedVisual";

type Props = {
  visual: FollowUpJourneyVisual;
};

export function JourneyVisual({ visual }: Props) {
  switch (visual) {
    case "lead":
      return <LeadVisual />;

    case "enroll":
      return <EnrollVisual />;

    case "started":
      return <StartedVisual />;

    case "engaged":
      return <ConversationVisual />;

    case "focused":
      return <FocusedVisual />;
  }
}
