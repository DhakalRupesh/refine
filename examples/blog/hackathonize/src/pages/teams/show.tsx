import { Show, useShow, Typography, Tag, useOne } from "@pankod/refine";
import { TeamType } from "interfaces";
const { Title, Text } = Typography;

export const TeamsShow = () => {
    const { queryResult } = useShow<TeamType>();
    const { data, isLoading } = queryResult;
    const record = data?.data;
    //   const { data: categoryData } = useOne<ITeams>({
    //     resource: "categories",
    //     id: record?.category.id || "",
    //     queryOptions: {
    //       enabled: !!record?.category.id,
    //     },
    //   });
    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Name</Title>
            <Text>{record?.name}</Text>
        </Show>
    );
};
