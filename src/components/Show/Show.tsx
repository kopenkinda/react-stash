import type { PropsWithChildren, ReactNode } from "react";

type ShowProps = {
	when: boolean;
	fallback?: ReactNode;
};

const Show = ({ when, children, fallback }: PropsWithChildren<ShowProps>) => {
	if (when) {
		return children;
	}
	return fallback;
};

export default Show;
