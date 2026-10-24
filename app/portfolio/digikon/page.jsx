import { metaCases } from "../../../lib/meta-cases.mjs";
import MetaCaseStudy, { caseMetadata } from "../../../components/MetaCaseStudy";
const study = metaCases.find((item) => item.slug === "digikon");
export const metadata = caseMetadata(study);
export default function Page() {
  return <MetaCaseStudy study={study} />;
}
