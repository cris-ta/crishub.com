import { Stack, Badge } from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";

type Props = {
  tags: string[];
};

const colorSchemes: ThemeTypings["colorSchemes"][] = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "linkedin",
  "facebook",
  "messenger",
  "whatsapp",
  "twitter",
  "telegram",
];

const BlogTags = ({ tags }: Props) => {
  return (
    <Stack direction="row">
      {tags.sort().map((tag, index) => (
        <Badge key={tag} colorScheme={colorSchemes[index]}>
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

export default BlogTags;
