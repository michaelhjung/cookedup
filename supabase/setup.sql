-- Run once in the Supabase SQL editor for this project.
-- This repo doesn't use the Supabase CLI/migrations yet, so schema and
-- storage setup steps are tracked here instead.

-- ---------------------------------------------------------------------
-- recipe-images bucket
--
-- Saved recipes store a permanent copy of their thumbnail here, since
-- Edamam's own image URLs are pre-signed S3 links that expire.
-- ---------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('recipe-images', 'recipe-images', true)
on conflict (id) do nothing;

-- Users may only write into a folder named after their own user id
-- (the app uploads to `{user_id}/{recipe_id}.{ext}`).
create policy "Users can upload their own recipe images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'recipe-images'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Users can overwrite their own recipe images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'recipe-images'
  and (storage.foldername(name))[1] = auth.uid()::text
);

-- The bucket is public, but this policy documents intent explicitly.
create policy "Anyone can view recipe images"
on storage.objects for select
to public
using (bucket_id = 'recipe-images');
