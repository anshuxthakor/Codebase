import React from "react";
import DrawingHeader from "./utils/DrawingHeader";
import SpecCard from "./utils/SpecCard";
import SpecRow from "./utils/SpecRow";
import StatusBadge from "./utils/StatusBadge";

const Segment = ({ letter, title, children, className = "", bordered = true }) => (
  <div
    className={`min-w-0 py-4 md:px-5 first:md:pl-0 ${
      bordered ? "md:border-r md:border-[#16324f]/15" : ""
    } ${className}`}
  >
    <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5b7089] mb-2">
      <span className="flex items-center justify-center h-4 w-4 border border-[#16324f] text-[9px] text-[#16324f]">
        {letter}
      </span>
      {title}
    </h3>
    <div className="space-y-1.5">{children}</div>
  </div>
);

const UserCard = ({ user, maxWidth = "max-w-md" }) => {
  const fullName = `${user.name.firstname} ${user.name.lastname}`;
  const initials = `${user.name.firstname.charAt(0)}${user.name.lastname.charAt(0)}`;

  return (
    <SpecCard maxWidth={maxWidth}>
      <DrawingHeader label="dwg no. 004 — user" />
      <div className="flex flex-col md:flex-row md:flex-wrap divide-y md:divide-y-0 divide-[#16324f]/15">
        <div className="flex items-center gap-3 py-4 md:pr-5 md:w-52 md:shrink-0 md:border-r md:border-[#16324f]/15">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border-[1.5px] border-[#16324f] font-mono text-sm font-bold uppercase text-[#16324f]">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-black uppercase tracking-tight text-[#16324f] leading-none">
              {fullName}
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="h-0.75 w-6 bg-[#d7263d]" />
              <span className="font-mono text-[10px] text-[#5b7089] truncate">
                @{user.username}
              </span>
            </div>
            <p className="font-mono text-[10px] text-[#5b7089] mt-0.5">
              #{user.id}
            </p>
          </div>
        </div>

        <Segment letter="A" title="Contact" className="md:flex-1 md:basis-40">
          <SpecRow label="Email" value={user.email} stacked padded={false} />
          <SpecRow label="Phone" value={user.phone} stacked padded={false} />
        </Segment>

        <Segment letter="B" title="Address" className="md:flex-1 md:basis-40">
          <SpecRow
            label="Street"
            value={`${user.address.number}, ${user.address.street}`}
            className="capitalize"
            padded={false}
            stacked
          />
          <SpecRow label="City" value={user.address.city} className="capitalize" padded={false} stacked />
          <SpecRow label="Zipcode" value={user.address.zipcode} padded={false} stacked />
        </Segment>

        <Segment letter="C" title="Location" className="md:flex-1 md:basis-40" bordered={false}>
          <SpecRow label="Latitude" value={user.address.geolocation.lat} padded={false} stacked />
          <SpecRow label="Longitude" value={user.address.geolocation.long} padded={false} stacked />
        </Segment>

        {/* Status */}
        <div className="flex items-center md:items-start md:flex-col justify-between md:justify-center gap-2 py-4 md:pl-5 md:w-32 md:shrink-0">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5b7089]">
            Status
          </span>
          <StatusBadge label="Active" color="#2f9e44" />
        </div>
      </div>
    </SpecCard>
  );
};

export default UserCard;