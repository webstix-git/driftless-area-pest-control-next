"use client";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-bar">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={`${item.label}-${index}`}>
                  {item.href && !isLast ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                  )}
                  {!isLast ? <span className="breadcrumb-sep" aria-hidden="true">/</span> : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
