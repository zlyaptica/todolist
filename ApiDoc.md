# **API**

### **!В случае ошибки на сервере, все API-вызовы возвращают код 500 и debug-сообщение**

### **В случае успеха, все API-вызовы возвращают код 200**

### **В случае отсутствия запрашиваемых данных в базе, или невозможности их туда добавить, API-вызовы возвращают код 404**

## Добавление новой доски

***/api/new/board/[user_nickname]/[board_name]***

## Добавление таска в доску

***/api/new/task/[user_nickname]/[board_id]/[task_name]/[task_state]***

## Получение юзера по нику

***/api/user/[user_nickname]***

## Проверка данных юзера с возвратом инфы о юзере

***/api/user/signin/[user_nickname]/[user_password]***

## Проверка идентификационных данных юзера

~~дублирует предыдущий, но не возращает инфу о юзере~~

***/api/user/check/[user_nickname]/[user_password]***

## Регистрация нового пользователя

***/api/user/signup/[user_name]/[user_nickname]/[user_password]***

## Получение доски

***/api/get/board/[user_nickname]/[board_id]***

## Получение таска

***/api/get/task/[task_id]/[user_nickname]/[board_id]***

## Добавление состояния на доску

***/api/new/state/[user_nickname]/[board_id]/[state_name]***

## Добавление пользователя к доске

***/api/user/add/[user_nickname]/[board_id]***

## Изменение состояния таска

***api/update/task/state/[board_id]/[task_id]/[state_index]***



#### **Новое**
1. Теперь новым таскам добавляется состояние, идущее первым в списке состояний доски
2. При создании доски ее айди записывается автору
3. При API-вызовах редактирования доски проверяется принадлежность юзера к этой доске
4. Добавлен новый костыль - _id досок в boards хранятся как string, а не как ObjectId

