import { generateArticle, pickNextTopic, BUSINESS_CONFIG, type AllowedCategory } from "@workspace/journal";

// Usage:
//   pnpm --filter @workspace/scripts run journal:generate
//   pnpm --filter @workspace/scripts run journal:generate -- "Mon sujet" "Mariage"
async function main() {
  const topicArg = process.argv[2];
  const categoryArg = process.argv[3] as AllowedCategory | undefined;

  let topic = topicArg;
  let category = categoryArg;

  if (!topic) {
    const picked = await pickNextTopic();
    topic = picked.topic;
    category = category ?? picked.category;
  }
  category = category ?? BUSINESS_CONFIG.defaultCategory;

  console.log(`Génération : "${topic}" [${category}]`);
  const result = await generateArticle(topic, category);

  if (!result.ok) {
    console.error(`Échec : ${result.error}`);
    process.exitCode = 1;
    return;
  }

  console.log(`OK — ${BUSINESS_CONFIG.journalPath}/${result.slug} — "${result.title}"`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => process.exit());
