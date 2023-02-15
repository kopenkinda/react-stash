import type { ReactNode } from "react";

type ForeachProps<T> = {
	items: T[];
	children: (_: { item: T; index: number }) => ReactNode;
};

const Foreach = <T,>({ children, items }: ForeachProps<T>) => {
	return items.map((item, index) => children({ item, index }));
};

export default Foreach;
