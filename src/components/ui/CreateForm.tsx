//https://www.radix-ui.com/themes/docs/components/dialog

import React from "react";

export const CreateForm = () => {
  return (
    <Box maxWidth="350px">
      <Card asChild>
        <a href="#">
          <Text as="div" size="2" weight="bold">
            Quick start
          </Text>
          <Text as="div" color="gray" size="2">
            Start building your next project in minutes
          </Text>
        </a>
      </Card>
    </Box>
  );
};
