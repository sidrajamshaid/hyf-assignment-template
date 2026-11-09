-- Return the total number of rows in task as a single value.

SELECT COUNT(*)
FROM task;


-- Return the number of tasks with no valid due date, including NULL or unparseable dates, as a single value.

SELECT COUNT(*)
FROM task
WHERE datetime(due_date) IS NULL;


-- Return all columns of tasks marked Done.

SELECT *
FROM task
WHERE status_id = 3;


-- Return all columns of tasks not marked Done.

SELECT *
FROM task
WHERE status_id != 3;


-- Return all columns of every task, ordered by creation date with the most recent first.

SELECT *
FROM task
ORDER BY created DESC;


-- Return all columns of the single most recently created task.

SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;


-- Return the title and due date of tasks whose title or description contains 'database', ignoring case. Column order: title, due_date.

SELECT title, due_date
FROM task
WHERE title LIKE '%database%'
   OR description LIKE '%database%';


-- Return every task's id and title. Column order: id, title. Order by id ascending.

SELECT id, title
FROM task
ORDER BY id;


-- Return the id and title of tasks with status_id 2. Column order: id, title. Order by id ascending.

SELECT id, title
FROM task
WHERE status_id = 2
ORDER BY id;


-- Return the id and title of tasks whose due_date is NULL. Column order: id, title. Order by id ascending.

SELECT id, title
FROM task
WHERE due_date IS NULL
ORDER BY id;


-- Return each task's id and title, ordered by title alphabetically (A to Z). Column order: id, title.

SELECT id, title
FROM task
ORDER BY title ASC;


-- Return the id and title of the five tasks with the highest IDs, highest ID first. Column order: id, title.

SELECT id, title
FROM task
ORDER BY id DESC
LIMIT 5;


-- Return the id and title of tasks with no assigned user (user_id is NULL). Column order: id, title. Order by id ascending.

SELECT id, title
FROM task
WHERE user_id IS NULL
ORDER BY id;


-- Change the title of task id 1 to 'Wash the laundry'. Update only that task and no other columns.

UPDATE task
SET title = 'Wash the laundry'
WHERE id = 1;


-- Set status_id to 3 for task id 22 only. Leave every other task unchanged.

UPDATE task
SET status_id = 3
WHERE id = 22;


-- Assign task id 23 to user id 11 by setting user_id to 11. Change no other rows or columns.

UPDATE task
SET user_id = 11
WHERE id = 23;


-- Set status_id to 1 for tasks whose user_id is NULL. These are task ids 23 and 35; change no other rows or columns.

UPDATE task
SET status_id = 1
WHERE user_id IS NULL;


-- Delete task id 35 only. Do not delete or change any other rows.

DELETE
FROM task
WHERE id = 35;


-- Remove the Personal tag association (tag_id 2) from task id 1 only. Do not delete the task or any other tag association.

DELETE
FROM task_tag
WHERE task_id = 1
  AND tag_id = 2;


-- Create a table named task_note with columns in this order: id INTEGER PRIMARY KEY, task_id INTEGER NOT NULL, note TEXT NOT NULL. Add a foreign key from task_id to task(id).

CREATE TABLE task_note (
    id INTEGER PRIMARY KEY,
    task_id INTEGER NOT NULL,
    note TEXT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES task(id)
);


-- Get the title and status (as text) of all tasks.

SELECT task.title, status.name
FROM task
JOIN status ON task.status_id = status.id;


-- Get the name of each status, along with a count of how many tasks have that status.

SELECT status.name, COUNT(*) AS task_count
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name;


-- Get the names of all statuses, sorted by the status with most tasks first.

SELECT status.name, COUNT(*) AS task_count
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_count DESC;