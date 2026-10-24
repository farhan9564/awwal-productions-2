import { shopifyProjects } from "../../../lib/projects.mjs";
import ShopifyProjectPage, {
  shopifyMetadata,
} from "../../../components/ShopifyProjectPage";
const project = shopifyProjects.find(
  (project) => project.slug === "jsons-sports",
);
export const metadata = shopifyMetadata(project);
export default function Page() {
  return <ShopifyProjectPage project={project} />;
}
