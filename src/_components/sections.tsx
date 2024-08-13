import { Children } from "lume/plugins/jsx_preact.ts";

const separator = <hr class="my-12 lg:my-20" />;

export interface SectionsData extends Lume.Data {
  children: Children | Children[];
}

export default function ({ children }: SectionsData) {
  // If multiple child, add separator.
  if (Array.isArray(children)) {
    // @ts-ignore: expression is callable even though ts says it isn't.
    children = children.reduce((acc: Children[], c: Children, i: number) => {
      const isLastChild = i === (children! as Children[]).length - 1;
      acc.push(c, isLastChild ? null : separator);

      return acc;
    }, []);
  }

  return <div class="pb-12 lg:pb-20">{children}</div>;
}
