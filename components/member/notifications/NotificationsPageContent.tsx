"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import {
  memberBtnDanger,
  memberBtnGhost,
  memberBtnSecondary,
  memberContainerXl,
  MEMBER_PAGE_BG,
  memberPagePadding,
  MemberEmptyState,
  MemberPageHeader,
} from "@/components/member/shared/member-ui";
import { getNotificationMessages } from "@/lib/i18n/notification-messages";
import { getProfileMessages } from "@/lib/i18n/profile-messages";
import { INITIAL_NOTIFICATIONS, type NotificationRecord } from "@/lib/notifications-data";
import { useLocale } from "@/components/LocaleProvider";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden
      className={`shrink-0 text-[#9ca3af] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1.5l6 5 6-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={`focus-ring flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors ${
        checked ? "border-[#178358] bg-[#178358]" : "border-[#666] bg-transparent hover:border-[#888]"
      }`}
    >
      {checked ? (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
          <path
            d="M1 4l2.5 2.5L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
}

function EditToolbar({
  allSelected,
  hasSelection,
  labels,
  onSelectAll,
  onUnread,
  onRead,
  onDelete,
  onExit,
}: {
  allSelected: boolean;
  hasSelection: boolean;
  labels: { selectAll: string; unread: string; read: string; delete: string; exit: string };
  onSelectAll: () => void;
  onUnread: () => void;
  onRead: () => void;
  onDelete: () => void;
  onExit: () => void;
}) {
  return (
    <div className="flex w-full max-w-[min(100vw-8rem,420px)] flex-col items-stretch gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-end">
      <label className="flex min-h-10 cursor-pointer items-center gap-2 rounded-md px-1 text-[12px] text-[#d4d4d4] sm:text-[13px]">
        <Checkbox checked={allSelected} onChange={onSelectAll} label={labels.selectAll} />
        <span className="whitespace-nowrap">{labels.selectAll}</span>
      </label>
      <div className="-mx-1 flex gap-2 overflow-x-auto pb-0.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:pb-0">
        <button type="button" disabled={!hasSelection} onClick={onUnread} className={memberBtnGhost}>
          {labels.unread}
        </button>
        <button type="button" disabled={!hasSelection} onClick={onRead} className={memberBtnGhost}>
          {labels.read}
        </button>
        <button type="button" disabled={!hasSelection} onClick={onDelete} className={memberBtnDanger}>
          {labels.delete}
        </button>
        <button type="button" onClick={onExit} className={memberBtnSecondary}>
          {labels.exit}
        </button>
      </div>
    </div>
  );
}

export default function NotificationsPageContent() {
  const { preferences } = useLocale();
  const n = getNotificationMessages(preferences.locale);
  const base = `/${preferences.locale}`;

  const [items, setItems] = useState<NotificationRecord[]>(INITIAL_NOTIFICATIONS);
  const [editMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allSelected = items.length > 0 && selected.size === items.length;
  const hasSelection = selected.size > 0;

  const exitEditMode = useCallback(() => {
    setEditMode(false);
    setSelected(new Set());
    setExpandedId(null);
  }, []);

  const toggleSelectAll = useCallback(() => {
    setSelected((prev) => {
      if (items.length === 0) return prev;
      if (prev.size === items.length) return new Set();
      return new Set(items.map((item) => item.id));
    });
  }, [items]);

  const toggleSelect = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const markSelectedRead = useCallback(
    (read: boolean) => {
      if (!hasSelection) return;
      setItems((list) =>
        list.map((item) => (selected.has(item.id) ? { ...item, read } : item)),
      );
      setSelected(new Set());
    },
    [hasSelection, selected],
  );

  const deleteSelected = useCallback(() => {
    if (!hasSelection) return;
    setItems((list) => list.filter((item) => !selected.has(item.id)));
    setSelected(new Set());
    if (items.length - selected.size === 0) setEditMode(false);
  }, [hasSelection, items.length, selected]);

  const toggleExpand = useCallback(
    (id: string) => {
      if (editMode) return;
      setExpandedId((current) => (current === id ? null : id));
      setItems((list) =>
        list.map((item) => (item.id === id && !item.read ? { ...item, read: true } : item)),
      );
    },
    [editMode],
  );

  const previewWithSupport = useMemo(() => {
    return (preview: string) => {
      const link = n.supportLink;
      if (!preview.includes(link)) return preview;
      const [before, after] = preview.split(link);
      return { before, after };
    };
  }, [n.supportLink]);

  return (
    <div className={MEMBER_PAGE_BG}>
      <MemberPageHeader
        width="xl"
        title={n.pageTitle}
        backHref={base}
        backLabel={getProfileMessages(preferences.locale).navLabel}
        stackTrailing={editMode}
        trailing={
          editMode ? (
            <EditToolbar
              allSelected={allSelected}
              hasSelection={hasSelection}
              labels={{
                selectAll: n.selectAll,
                unread: n.unread,
                read: n.read,
                delete: n.delete,
                exit: n.exit,
              }}
              onSelectAll={toggleSelectAll}
              onUnread={() => markSelectedRead(false)}
              onRead={() => markSelectedRead(true)}
              onDelete={deleteSelected}
              onExit={exitEditMode}
            />
          ) : (
            <button
              type="button"
              onClick={() => setEditMode(true)}
              disabled={items.length === 0}
              className={memberBtnSecondary}
            >
              {n.edit}
            </button>
          )
        }
      />

      <div className={`${memberContainerXl} ${memberPagePadding}`}>
        {items.length === 0 ? (
          <MemberEmptyState message={n.empty} />
        ) : (
          <ul className="space-y-3">
            {items.map((record) => {
              const copy = n.items[record.itemId];
              const isExpanded = expandedId === record.id;
              const isSelected = selected.has(record.id);
              const previewParts = previewWithSupport(copy.preview);

              return (
                <li key={record.id}>
                  <article
                    className={`overflow-hidden rounded-lg border transition-colors ${
                      !record.read && !editMode
                        ? "border-[#444] bg-[#121212]"
                        : "border-[#3a3a3a] bg-[#0f0f0f]"
                    }`}
                  >
                    <div
                      role={editMode ? undefined : "button"}
                      tabIndex={editMode ? undefined : 0}
                      onClick={() => toggleExpand(record.id)}
                      onKeyDown={(e) => {
                        if (editMode) return;
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleExpand(record.id);
                        }
                      }}
                      className={`w-full px-4 py-3.5 text-left sm:px-5 ${
                        editMode ? "" : "cursor-pointer hover:bg-white/[0.02]"
                      }`}
                    >
                      <p className="text-[12px] text-[#9ca3af]">{record.date}</p>

                      <div className="mt-2 flex items-start gap-3">
                        {editMode ? (
                          <div className="pt-0.5">
                            <Checkbox
                              checked={isSelected}
                              onChange={() => toggleSelect(record.id)}
                              label={copy.title}
                            />
                          </div>
                        ) : null}

                        <div className="min-w-0 flex-1">
                          <h2
                            className={`text-[14px] font-bold leading-snug sm:text-[15px] ${
                              record.read ? "text-[#d4d4d4]" : "text-white"
                            }`}
                          >
                            {copy.title}
                          </h2>
                          {!isExpanded ? (
                            <p className="mt-1.5 text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
                              {typeof previewParts === "string" ? (
                                previewParts
                              ) : (
                                <>
                                  {previewParts.before}
                                  <Link
                                    href={`${base}/support`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-[#5eb3ff] hover:underline"
                                  >
                                    {n.supportLink}
                                  </Link>
                                  {previewParts.after}
                                </>
                              )}
                            </p>
                          ) : null}
                        </div>

                        {!editMode ? (
                          <div className="pt-1">
                            <ChevronDown open={isExpanded} />
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {isExpanded && !editMode ? (
                      <div className="border-t border-[#2a2a2a] bg-[#0a0a0a]/50 px-4 pb-4 pt-3 sm:px-5">
                        <p className="text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
                          {copy.body}
                        </p>
                      </div>
                    ) : null}
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
