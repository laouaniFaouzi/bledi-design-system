import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Avatar } from '../core/Avatar.jsx';
import { VerifiedName } from '../core/VerifiedMark.jsx';
import { Icon } from '../core/Icon.jsx';
import { RouteLine } from './RouteLine.jsx';

export function RequestCard({ badges = [], category, carrier, flight, route = {}, date, author, authorVerified = false, markSrc, authorRole = 'Membre Bledi', budget, message, details, notices, action, style, ...rest }) {
  return (
    <article
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-card)',
        fontFamily: 'var(--font-sans)', overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      <div style={{ padding: 'var(--space-5)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-start' }}>
          {badges}
        </div>
        {category ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <Badge tone="neutral">{category}</Badge>
          </div>
        ) : null}

        <h3 style={{ margin: 'var(--space-4) 0 var(--space-5)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-brand)' }}>
          {carrier} <span style={{ marginLeft: 6 }}>{flight}</span>
        </h3>

        <RouteLine {...route} />

        {date ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            <Icon name="calendar" size={14} />{date}
          </div>
        ) : null}
      </div>

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Avatar initial={(author || '?').charAt(0)} />
            <div>
              <VerifiedName name={author} verified={authorVerified} markSrc={markSrc} />
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{authorRole}</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Budget proposé</div>
            <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)' }}>{budget}</div>
          </div>
        </div>

        {message ? <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)' }}>{message}</p> : null}

        {details ? (
          <div style={{ background: 'var(--surface-muted)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-primary)' }}>
            {details}
          </div>
        ) : null}

        {notices}
        {action}
      </div>
    </article>
  );
}
